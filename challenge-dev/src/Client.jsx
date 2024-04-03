import React from 'react';
import { ApolloClient, InMemoryCache,gql} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', 
  cache: new InMemoryCache()
});


export default client;