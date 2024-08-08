import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://pack-house.local/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
  ssrMode: true, // Enable SSR mode
});

export default client;

