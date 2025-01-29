import { customer } from "../../../data/data-product";
import './index.scss'

const OurCustomerSection = () => {
    return (
        <section className="container-our-customer marg-all" >
            <div className="header-our-customer" >
                <h1>Our Customer</h1>
            </div>
            <div className="logo-customer" >
                {
                    customer.map((item, index) => {
                        const img = item?.img
                        return (
                            <div className="list-customer" key={index} >
                                <div className="col-customer">
                                    <img src={img} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default OurCustomerSection;