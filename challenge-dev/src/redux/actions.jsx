import {useQuery} from '@apollo/client';
import {GET_CHARACTER, GET_CHARACTER_BY_NAME } from './../Client'


export const getAllCharacters =  (data) => {
    // console.log(data.info.pages)
    const onlyStatus = data.results.map(e => e.status)
    const status =  onlyStatus.filter((item, index) => onlyStatus.indexOf(item) === index)
    const onlySpacies = data.results.map(e => e.species)
    const species = onlySpacies.filter((item, index) => onlySpacies.indexOf(item) === index)
    const onlyGender = data.results.map(e => e.gender)
    const genders = onlyGender.filter((item, index) => onlyGender.indexOf(item) === index)
  

    return {
      type: 'GET_CHARACTERS',
      payload: {
        data: data.results, 
        pages: data.info.pages,
        status: status,
        species: species,
        gender: genders
      }
    };
  };
  

export const getCharacterByName = (data) => {

    return {
      type: 'GET_CHARACTER',
      payload: data
    };
};

// export const filterCharacters = (data) => {
//   return{
//     type:'FILTER_CHARACTERS',
//     payload: data
//   }
// }

export const filterGender = (data) => {
  console.log(data)
  return{
    type: 'FILTER_GENDER',
    payload: data
  }
}

export const filterStatus = (data) => {
  return{
    type: 'FILTER_STATUS',
    payload: data
  }
}
  
export const filterSpecies = (data) => {
  return{
    type: 'FILTER_SPECIES',
    payload: data
  }
}