import React from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"

const Pagination = ({page, changePage}) => {

    const pages = useSelector(state => state.pages)

    const handleChange = (number) => {
        if(number >= 1 && number <= pages) changePage(number)
    }

    return(
        <div  className={style.pagination}>
            <button onClick={() => handleChange(page-1)} >prev</button>
            <span onClick={() => handleChange(1)}>1... </span>
            {page !== 1 && <span className={style.currentPage}>{page}</span>}
           {page !== pages && <span  onClick={() => handleChange(pages)}> ...{pages}</span>}
            <button onClick={() => handleChange(page+1)}>next</button>
        </div>
    )

}

export default Pagination