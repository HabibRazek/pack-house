import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WORDPRESS_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
  ssrMode: true, // Enable SSR mode
});

export default client;

