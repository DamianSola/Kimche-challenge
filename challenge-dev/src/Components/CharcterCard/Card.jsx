import style from "./style.module.css"


const Card = ({ name, image, id, openModal, upDate}) => {

    const handleChange = (id) => {
        openModal()
        upDate(id)
    }
     
    return (
        <div className={style.contentCard}>
            <img src={image} alt={name} className={style.imgCard}/>
            <p className={style.name}>{name}</p>
            <button className={style.detailButton} onClick={() => handleChange(id)}>ver detalles</button>
        </div>
    )
}

export default Card