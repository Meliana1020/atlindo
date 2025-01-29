import './index.scss'
import AboutUsSection from "./section/about-us";
import ContactUsSection from './section/contact-us';
import HeroSection from "./section/hero"
import OurCustomerSection from './section/our-customer';
import ProductSection from "./section/product";
import ProjectSection from "./section/project";


const Body = () => {
    return (
        <section className="container-body">
            <div className="section-hero" id="hero">
                <HeroSection />
            </div >
            <div className="section-about" id="about">
                <AboutUsSection />
            </div>
            <div className="section-product" id="product">
                <ProductSection />
            </div>
            <div className="section-project" id="project">
                <ProjectSection />
            </div>
            <div className='section-our-customer' id='customer'>
                <OurCustomerSection />
            </div>
            <div className='section-contact-us' id='contact'>
                <ContactUsSection />
            </div>
        </section>
    )
}

export default Body;