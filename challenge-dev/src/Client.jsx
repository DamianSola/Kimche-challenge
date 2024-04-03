import React from 'react';
import { ApolloClient, InMemoryCache,gql} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql', 
  cache: new InMemoryCache()
});


export const GET_CHARACTER = gql`
query getAllCharacters($characterPage: Int){
  characters(page: $characterPage) {
    info{
      pages
    }
    results {
     name
     image
     id
     status
     species
     gender
     origin{
       name
     }
     location{
       name
     }
   }
   
 }
}
`
export const GET_CHARACTER_BY_NAME = gql`
query getAllCharByName($characterName: String) {
  characters(filter:{name:$characterName }) {
   results {
     name
     image
     id
     status
     species
     gender
     origin{
       name
     }
     location{
       name
     }
   }
 }
}
`

export const GET_CHARACTER_ID = gql`
query getCharacterById( $characterId: ID!){
    character(id: $characterId){
      name
      id
      image
      status
      species
      gender
      origin{
        name
      }
      location{
        name
      }
    }
  }
`

export const FILTER_CHARACTERS = gql`
query allfilter($characterStatus: String, $characterGender: String, $characterSpecies: String) {
  characters(filter:{status:$characterStatus, species: $characterSpecies, gender: $characterGender }) {
   results {
     name
     image
     id
     status
     species
     gender
     origin{
       name
     }
     location{
       name
     }
   }
 }
}
`
