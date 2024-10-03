import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Characters from './Components/Characters'
import {useQuery} from '@apollo/client';
import {GET_CHARACTER, GET_CHARACTER_BY_NAME } from './Client'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from './redux/actions';
import Pagination from './Components/Pagination/Index';
import Footer from './Components/Footer/Index';



function App() {

  const [page, setPage] = useState(1)
  const {loading, error, data} = useQuery(GET_CHARACTER, {
    variables: { characterPage : page },
  });

    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)

    const addData = () => {
      data && dispatch(getAllCharacters(data.characters))
    }


  useEffect( () => {
    addData(data)
  }, [data])

  return (
      <div className='home-content'>
       <NavBar cleanFilter={addData}/>
       {data &&<Pagination page={page} changePage={setPage}/>}
       {
          loading? <img src="https://imager-prod.onquidd.com/quidds/108662-img-l-1570289420.gif"/>:
          error? <p>Error! {error.message} </p>:
          // characters && <img src="https://imager-prod.onquidd.com/quidds/108662-img-l-1570289420.gif"/>
          characters && <Characters data={characters} />
       }
       {data &&<Pagination page={page} changePage={setPage}/>}
       <Footer/>
      </div>
  )
}

export default App;
