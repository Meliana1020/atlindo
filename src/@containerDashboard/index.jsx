
import Body from "../@components/body";
import Header from "../@components/header";

const ContainerDashboard = ({ childern }) => {
    return (
        <div className="container-dashboard" style={{ padding: '0px' }} id="dashboard">
            <Header />
            <Body />
        </div>
    )
}
export default ContainerDashboard;