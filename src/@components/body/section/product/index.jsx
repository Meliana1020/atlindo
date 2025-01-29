import { useState } from 'react';
import { product } from '../../../data/data-product';
import './index.scss';

const ProductSection = () => {
    const [getNameProduct, setGetNameProduct] = useState('Comsumable');

    return (
        <section className="container-product marg-all">
            <div className='header-product'>
                <h1>Product</h1>
            </div>
            <div className="product">
                <div className="img">
                    {
                        product.map((item) => {
                            if (item?.nameProduct === getNameProduct) {
                                return (
                                    <div key={item?.nameProduct} className="img-container">
                                        {item?.img?.map((imgSrc, index) => (
                                            <img key={index} src={imgSrc} alt={`${item?.nameProduct}-${index}`} />
                                        ))}
                                    </div>
                                );
                            }
                            return null
                        })
                    }
                </div>
                <div className="menu-product">
                    {
                        product.map((item) => (
                            <div key={item?.nameProduct} className={`name-product ${getNameProduct === item?.nameProduct ? 'active' : ''}`}>
                                <h2 onClick={() => setGetNameProduct(item?.nameProduct)}>
                                    {item?.nameProduct}
                                </h2>
                                <p>{item?.deskripsion}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
