import React from 'react';
import ProductCard from '../productcard/ProductCard';
// import products from '../productdata/ProductData';

const ProductSection = ({ category, products }) => {
    return (
        
            products.map(product => {
                return (
                    <ProductCard
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        prices={product.prices}
                    />
                );
            })
        
    );
};

export default ProductSection;
