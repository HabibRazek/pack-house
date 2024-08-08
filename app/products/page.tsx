import { gql } from '@apollo/client';
import client from '../../apollo-client';
import Products from '@/components/Products';
import { Product } from '../../types';

const GET_PRODUCTS = gql`
  query {
    products {
      nodes {
        id
        name
        description
        slug
        image {
          sourceUrl
        }
        ... on ProductWithPricing {
          price
        }
        ... on SimpleProduct {
          price
        }
        ... on ProductVariation {
          price
        }
        ... on ExternalProduct {
          price
        }
        ... on GroupProduct {
          price
        }
      }
    }
  }
`;

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return data.products.nodes;
};

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Hi there from the app</h1>
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
