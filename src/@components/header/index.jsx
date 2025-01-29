import { useState } from 'react'
import './index.scss'
import logoPt from '/images/Logo-Pt.jpeg'
import { useEffect } from 'react'
const Header = () => {
    const [active, setActive] = useState('')

    const handleScroll = (sectionId) => {
        const targetSection = document.getElementById(sectionId)

        if (targetSection) {
            const offset = sectionId == 'product' ? 25 : 70
            const topPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
        setActive(sectionId || '')
    };


    useEffect(() => {

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <section className="container-header">
            <div className="logo" onClick={() => handleScroll('dashboard')}>
                <img src={logoPt} alt='gambar' />
            </div>
            <div className="navbar-menu">
                <p onClick={() => { handleScroll('about'); }} style={active == 'about' ? { color: '#F58322' } : { color: 'black' }}>About Us</p>
                <p onClick={() => { handleScroll('product'); }} style={active == 'product' ? { color: '#F58322' } : { color: 'black' }}>Product</p>
                <p onClick={() => { handleScroll('project'); }} style={active == 'project' ? { color: '#F58322' } : { color: 'black' }}>Projek</p>
                <p onClick={() => { handleScroll('customer'); }} style={active == 'customer' ? { color: '#F58322' } : { color: 'black' }}>Our Customer</p>
                <p onClick={() => { handleScroll('contact'); }} style={active == 'contact' ? { color: '#F58322' } : { color: 'black' }}>Contact Us</p>
            </div>
        </section>
    )
}
export default Header

