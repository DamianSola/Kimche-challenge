import style from "./style.module.css"

import { useQuery, gql } from '@apollo/client';


const GET_CHARACTER_ID = gql`
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


const Modal = ({id, onClose}) => {

    const {loading, error, data} = useQuery(GET_CHARACTER_ID, {
        variables: { characterId : id },
    });

    if(loading) return (
        <div className={style.modalConent}>
            <div className={style.modal}>
            <span onClick={onClose}>X</span>
                Loading...
            </div>
        </div>
    )
    if(error) return (
        <div className={style.modalConent}>
            <div className={style.modal}>
            <span onClick={onClose}>X</span>
                <p>{error.message}</p>
            </div>
        </div>
    )

    return(
        <div className={style.modalConent}>
            <div className={style.modal}>
                <span onClick={onClose}>X</span>
                <div className={style.imageContainer}>
                <img src={data.character.image} alt="foto-personaje-R&M"/>
                </div>
                <div className={style.info}>
                    <h2>{data.character.name}</h2>
                    <p>status: {data.character.status}</p>
                    <p>specie: {data.character.species}</p>
                    <p>gender: {data.character.gender}</p>
                    <p>origin: {data.character.origin.name}</p>
                    <p>location: {data.character.location.name}</p>
                </div>
            </div>
        </div>
    )

}

export default Modal;
