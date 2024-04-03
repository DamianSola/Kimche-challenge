import style from "./style.module.css"


const Card = ({ name, image, id, openModal, upDate}) => {

    const handleChange = (id) => {
        openModal()
        upDate(id)
    }
     
    return (
        <div className={style.contentCard}>
            <img src={image} alt={name} className={style.imgCard}/>
            <button className={style.name} onClick={() => handleChange(id)}>{name}</button>
        </div>
    )
}

export default Card