import React,{useEffect, useState} from "react";
import style from "./style.module.css"
import {GET_CHARACTER_BY_NAME} from "./../../Client";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {getCharacterByName} from "./../../redux/actions";
import { GenderFilter, SpeciesFilter, StatusFilter } from "../Filters/Index";

const NavBar = ({cleanFilter}) => {

    const [character, setCharacter] = useState([])
    const {loading, error, data} = useQuery(GET_CHARACTER_BY_NAME, {
        variables: { characterName : character },
    });
    const dispatch = useDispatch()
   
    
    const  handleInputChange = (e) => {
        setCharacter(e.target.value);
    }

    useEffect(() => {
        data && dispatch(getCharacterByName(data.characters.results))
    },[data])

    return(
        <nav className={style.navContent}>
            <div className={style.searchContent}>
            <img className={style.navImg} src="https://i.pinimg.com/736x/cf/c3/08/cfc308095c39dbb5a7975d5e89564836.jpg"/>
                <input className={style.search} onChange={(e) => handleInputChange(e)} type="text" placeholder="search character..."/>
            </div>
            <br/>
            <div className={style.buttonClean}>
            <GenderFilter/>
            <SpeciesFilter/>
            <StatusFilter/>
                <button className={style.clean} onClick={cleanFilter}>limpiar filtros</button>
            </div>
        </nav>
    )
}

export default NavBar;