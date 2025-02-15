import { useState } from 'react';
import { product } from '../../../data/data-product';
import './index.scss';
import { SlickProduct } from './slickProduct';

const ProductSection = () => {

    const [getNameProduct, setGetNameProduct] = useState('Consumable');

    return (
        <section className="container-product marg-all">
            <div className='header-product'>
                <h1>Product</h1>
            </div>
            <div className="product">
                <div className="img">
                    <SlickProduct getNameProduct={getNameProduct} />
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
