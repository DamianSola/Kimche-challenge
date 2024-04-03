import React, {useEffect, useState} from "react";
import Card from "../CharcterCard/Card";
import Modal from "../Modal/Index";
import style from "./style.module.css";


const Characters = ({data}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [dataModal, setDataModal] = useState(null)

    console.log(dataModal)

    // useEffect(() => {
    // },[])

    return(
        <div className={style.ContentChar}>
            {isOpen && <Modal onClose={() => setIsOpen(false)} id={dataModal}/>}
            {data && data.map(character => {

             return<Card
                openModal={() => setIsOpen(true)}
                upDate= {setDataModal} 
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                />
            }
            )}
        </div>
    )
}

export default Characters;