import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Characters from './Components/Characters'
import { useQuery, gql } from '@apollo/client';
import client from './Client'

const GET_CHARACTER = gql`
query getAllCharacters{
  characters(page: 1) {
   results {
     name
     image
     id
   }
 }
}
`


function App() {

  const { loading, error, data } = useQuery(GET_CHARACTER);

  // console.log(data.characters.results)

  const [character, setCharacter] = useState([])

  useEffect( () => {

  }, [])

 

  return (
    <>
      <div className='home-content'>
       <NavBar/>
       {
          loading? <p>Loading...</p>:
          error? <p>Error! {error.message} </p>:
          <Characters data={data.characters.results} />
       }
      </div>
    </>
  )
}

export default App;
