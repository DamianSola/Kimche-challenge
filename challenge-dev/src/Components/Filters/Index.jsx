import { useDispatch, useSelector } from "react-redux";
import {filterGender, filterSpecies, filterStatus} from "./../../redux/actions"
import style from "./style.module.css"

export const StatusFilter = () => {

    const dispatch = useDispatch()
    const status = useSelector(state => state.status) // cambiar el gender

    const handleClick = (e) => {
        dispatch(filterStatus(e.target.value)) 
    }

    return(
        <div className={style.filter}>
            <label>status: </label> 
            <select onChange={(e) => handleClick(e)} name="status" id="status">
                {status && status.map((e,i) => <option value={e} key={i}>{e}</option>)} 
            </select> 
        </div>
    )
}

export const SpeciesFilter = () => {

    const dispatch = useDispatch()
    const species = useSelector(state => state.species) // cambiar el gender

    const handleClick = (e) => {
        dispatch(filterSpecies(e.target.value)) 
    }

    return(
        <div  className={style.filter}>
            <label>species: </label> 
            <select onChange={(e) => handleClick(e)} name="species" id="species">
                {species && species.map((e,i) => <option value={e} key={i}>{e}</option>)} 
            </select> 
        </div>
    )
}

export const GenderFilter = () => {

    const dispatch = useDispatch()
    const gender = useSelector(state => state.gender)

    const handleClick = (e) => {
        dispatch(filterGender(e.target.value))
    }

    return(
        <div  className={style.filter}>
            <label>gender: </label>
            <select onChange={(e) => handleClick(e)} name="gender" id="gender">
                {gender && gender.map((e,i) => <option value={e} key={i}>{e}</option>)}
            </select>
        </div>
    )
}


