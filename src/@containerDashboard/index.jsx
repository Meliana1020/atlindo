import Hero from "../@components/body";
import Header from "../@components/header";

const ContainerDashboard = ({ childern }) => {
    return (
        <div className="container-dashboard" style={{ padding: '0px' }}>
            <Header />
            <Hero />
        </div>
    )
}
export default ContainerDashboard;