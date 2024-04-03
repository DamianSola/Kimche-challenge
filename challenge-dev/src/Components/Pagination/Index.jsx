import React from "react"
import { useSelector } from "react-redux"


const Pagination = ({page, changePage}) => {

    const pages = useSelector(state => state.pages)

    const handleChange = (number) => {
        if(number >= 1 && number <= pages) changePage(number)
    }

    return(
        <div>
            <button onClick={() => handleChange(page-1)}>prev</button>
            <span key="1" onClick={() => handleChange(1)}>1... </span>
            {page !== 1 && <span key="2">{page}</span>}
           {page !== pages && <span key="3" onClick={() => handleChange(pages)}> ... {pages}</span>}
            <button onClick={() => handleChange(page+1)}>next</button>
        </div>
    )

}

export default Pagination