import style from "./style.module.css"
import { useQuery } from '@apollo/client';
import {GET_CHARACTER_ID} from "./../../Client"



const Modal = ({id, onClose}) => {

    const {loading, error, data} = useQuery(GET_CHARACTER_ID, {
        variables: { characterId : id },
    });

    if(loading) return (
        <div className={style.modalConent}>
            <div className={style.modal}>
            <span onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff">
                        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
            </span>
            <div className={style.imageContainer}>

            <img src="https://imager-prod.onquidd.com/quidds/108662-img-l-1570289420.gif"/>
            </div>
            <div className={style.info}>
                <h2>Loading...</h2>
            </div>
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
                <span onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#ffff">
                        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
                    </span>
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
