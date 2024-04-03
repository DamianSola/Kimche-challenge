import React from "react";
import style from "./style.module.css"


const NavBar = () => {
    return(
        <nav className={style.navContent}>
            <img className={style.navImg} src="https://i.pinimg.com/736x/cf/c3/08/cfc308095c39dbb5a7975d5e89564836.jpg"/>
            <div className={style.searchContent}>
                <input className={style.search} type="text" placeholder="search character..."/>
                <button className={style.btnSearch}>search</button>
                <section>

                <select>
                    <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option>  
                </select>

                   <select name="" id="">
                   <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option>
                    <option value="default">Sort by: Popularity</option></select>     
                </section>
            </div>
        </nav>
    )
}

export default NavBar;