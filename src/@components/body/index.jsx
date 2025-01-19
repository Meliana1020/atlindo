import AboutUsSection from "./section/about-us";
import HeroSection from "./section/hero"

const Body = () => {
    return (
        <div>
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