import { useDispatch, useSelector } from "react-redux";
import {FILTER_CHARACTERS} from "./../../Client"
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {filterCharacters} from "./../../redux/actions"

export const StatusFilter = () => {
    const [filter, setFilter] = useState([])
    const {loading, error, data} = useQuery(FILTER_CHARACTERS, { //cambiar el gender
        variables: { characterStatus : filter }, //cambiar elgender
    });
    const dispatch = useDispatch()
    const status = useSelector(state => state.status) // cambiar el gender

    const handleClick = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        data && dispatch(filterCharacters(data.characters.results)) //misma accion
    },[data])

    return(
        <div>
            <label>status: </label> 
            <select onChange={(e) => handleClick(e)} name="species" id="species">
                {status && status.map((e,i) => <option value={e} key={i}>{e}</option>)} 
            </select> 
            <p>{loading && loading}</p>
        </div>
    )
}

export const SpeciesFilter = () => {
    const [filter, setFilter] = useState([])
    const {loading, error, data} = useQuery(FILTER_CHARACTERS, { //cambiar el gender
        variables: { characterSpecies : filter }, //cambiar elgender
    });
    const dispatch = useDispatch()
    const species = useSelector(state => state.species) // cambiar el gender

    const handleClick = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        data && dispatch(filterCharacters(data.characters.results)) //misma accion
    },[data])

    return(
        <div>
            <label>species: </label> 
            <select onChange={(e) => handleClick(e)} name="species" id="species">
                {species && species.map((e,i) => <option value={e} key={i}>{e}</option>)} 
            </select> 
            <p>{loading && loading}</p>
        </div>
    )
}

export const GenderFilter = () => {

    const [filter, setFilter] = useState([])
    const {loading, error, data} = useQuery(FILTER_CHARACTERS, {
        variables: { characterGender : filter },
    });
    const dispatch = useDispatch()
    const gender = useSelector(state => state.gender)

    const handleClick = (e) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        data && dispatch(filterCharacters(data.characters.results))
    },[data])


    return(
        <div>
            <label>gender: </label>
            <select onChange={(e) => handleClick(e)} name="gender" id="gender">
                {gender && gender.map((e,i) => <option value={e} key={i}>{e}</option>)}
            </select>
            <p>{loading && loading}</p>
        </div>
    )
}


