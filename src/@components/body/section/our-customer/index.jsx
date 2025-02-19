import { useEffect, useState } from "react";
import { customer } from "../../../data/dami-data";
import './index.scss'

const OurCustomerSection = () => {
    const [getWitdh, setGetWitdh] = useState({
        width: undefined
    })

    useEffect(() => {

        function handleResize() {
            const witdh = document.documentElement.clientWidth
            setGetWitdh(witdh)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.addEventListener('resize', handleResize)
    }, [])

    return (
        <section className="container-our-customer marg-all" >
            <div className="header-our-customer" >
                <h1>Our Customer</h1>
            </div>
            <div className="logo-customer" >
                {
                    customer.map((item, index) => {
                        const img = item?.img
                        const id = item?.id
                        return (
                            <div className="list-customer" key={index} >
                                <div className="col-customer">
                                    <img src={img} style={{
                                        height: getWitdh < 700
                                            ? (item?.id !== 'ssk' ? '30px' : '50px')
                                            : '60px'
                                    }} />
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