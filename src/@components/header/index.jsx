import { useState } from 'react'
import './index.scss'
import logoPt from '../data/images/Logo-Pt.jpeg'
import { useEffect } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Header = () => {
    const [active, setActive] = useState('')

    const handleScroll = (sectionId) => {
        const targetSection = document.getElementById(sectionId)

        if (targetSection) {
            const offset = sectionId == 'product' ? 40 : 70
            const topPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
        setActive(sectionId || '')
    };


    useEffect(() => {

        const sections = ['about', 'product', 'project', 'customer', 'contact', 'location'];

        const handleScrollChange = () => {
            let currentSection = '';

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        currentSection = section;
                    }
                }
            });

            setActive(currentSection);
        };

        window.addEventListener('scroll', handleScrollChange);
        handleScrollChange(); // Panggil saat pertama kali

        return () => {
            window.removeEventListener('scroll', handleScrollChange);
        };
    }, []);

    return (
        <section className="container-header">
            <div className="logo" onClick={() => handleScroll('dashboard')}>
                <img src={logoPt} alt='gambar' />
            </div>
            <div className="navbar-menu">
                <p onClick={() => { handleScroll('about'); }} style={active == 'about' ? { color: '#F58322' } : { color: 'black' }}>About Us</p>
                <p onClick={() => { handleScroll('product'); }} style={active == 'product' ? { color: '#F58322' } : { color: 'black' }}>Product</p>
                <p onClick={() => { handleScroll('project'); }} style={active == 'project' ? { color: '#F58322' } : { color: 'black' }}>Project</p>
                <p onClick={() => { handleScroll('customer'); }} style={active == 'customer' ? { color: '#F58322' } : { color: 'black' }}>Our Customer</p>
                <p onClick={() => { handleScroll('contact'); }} style={active == 'contact' ? { color: '#F58322' } : { color: 'black' }}>Contact Us</p>
                <p onClick={() => { handleScroll('location'); }} style={active == 'location' ? { color: '#F58322' } : { color: 'black' }}>Location</p>
            </div>
            <div className='navbar-menu-mobile'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        className='menu-button'
                    />
                    <MenuList className='menu-list'>
                        <MenuItem className='item' onClick={() => { handleScroll('about'); }} style={active == 'about' ? { color: '#F58322' } : { color: 'black' }} >
                            About Us
                        </MenuItem>
                        <MenuItem className='item' onClick={() => { handleScroll('product'); }} style={active == 'product' ? { color: '#F58322' } : { color: 'black' }}>
                            Product
                        </MenuItem>
                        <MenuItem className='item' onClick={() => { handleScroll('project'); }} style={active == 'project' ? { color: '#F58322' } : { color: 'black' }}>
                            Project
                        </MenuItem>
                        <MenuItem className='item' onClick={() => { handleScroll('customer'); }} style={active == 'customer' ? { color: '#F58322' } : { color: 'black' }}>
                            Our Customer
                        </MenuItem>
                        <MenuItem className='item' onClick={() => { handleScroll('contact'); }} style={active == 'contact' ? { color: '#F58322' } : { color: 'black' }}>
                            Contact Us
                        </MenuItem>
                        <MenuItem className='item' onClick={() => { handleScroll('location'); }} style={active == 'location' ? { color: '#F58322' } : { color: 'black' }}>
                            Location
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </section>
    )
}
export default Header

