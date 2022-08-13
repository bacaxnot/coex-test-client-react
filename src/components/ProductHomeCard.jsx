import '@styles/productHomeCard.sass'
import React from 'react';
import useGetImage from '@hooks/useGetImage';
import QuantitySelector from './QuantitySelector';
import AddToCartBtn from './AddToCartBtn';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
});

const ProductHomeCard = ({ product }) => {
    const image = useGetImage(product.id)

    return (
        <div className="product-home-card">
            <figure>
                <img src={image.image_url} alt={product.name} />
            </figure>
            <section className="product-info">
                <p className="product-title">
                    {product.name + ' ' + product.detail}
                </p>
                <span className="product-price">
                    {formatter.format(product.untaxed_price)}
                </span>
                <div className="product-actions">
                    <QuantitySelector></QuantitySelector>
                    <AddToCartBtn></AddToCartBtn>
                </div>
            </section>
        </div>
    );
};

export default ProductHomeCard;