'use client';

import React from 'react';
import { Product } from '../types';
import Image from 'next/image';

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
            {product.image && <Image  src={product.image.sourceUrl} alt={product.name} width={500} height={500} />}
            <div>{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
