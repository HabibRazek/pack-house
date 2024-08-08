// types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  image?: {
    sourceUrl: string;
  };
  price?: string;
}
