import AboutUsSection from "./section/about-us";
import HeroSection from "./section/hero"
import ProductSection from "./section/product";

const Body = () => {
    return (
        <div className="container-body">
            <section className="section-hero">
                <HeroSection />
            </section>
            <section className="section-about">
                <AboutUsSection />
            </section>
            <section className="section-product">
                <ProductSection />
            </section>
        </div>
    )
}

export default Body;