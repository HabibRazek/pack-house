'use client';

import React from 'react';
import { Product } from '../types';

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
            {product.image && <img src={product.image.sourceUrl} alt={product.name} />}
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
