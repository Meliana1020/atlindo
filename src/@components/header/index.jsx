import './index.scss'
import logoPt from '/images/logo-pt.png'
const Header = () => {
    return (
        <section className="container-header">
            <div className="logo">
                <img src={logoPt} alt='gambar' />
                <div className='title-logo'>
                    <p>PT.Altindo</p >
                    <p>Mitra Perkasa</p>
                </div>
            </div>
            <div className="navbar-menu">
                <p>About Us</p>
                <p>Product</p>
                <p>Projek</p>
                <p>Our Customer</p>
                <p>Contact Us</p>
            </div>
        </section>
    )
}
export default Header