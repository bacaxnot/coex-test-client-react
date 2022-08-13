import '@styles/home.sass'
import React from 'react';
import useGetProducts from '@hooks/useGetProducts'
import Carousel from '@components/Carousel'
import ProductHomeCard from '@components/ProductHomeCard'

const Home = () => {
    const products = useGetProducts()

    return (
        <>
        <Carousel></Carousel>
        <div className="product-list">
            {products.map( product => (
					<ProductHomeCard product={product} key={`product-${product.id}`}/>
				))}
        </div>
        </>
    );
};

export default Home;