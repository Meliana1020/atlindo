import AboutUsSection from "./section/about-us";
import HeroSection from "./section/hero"

const Body = () => {
    return (
        <div className="container-body">
            <section>
                <HeroSection />
            </section>
            <section>
                <AboutUsSection />
            </section>
        </div>
    )
}

export default Body;