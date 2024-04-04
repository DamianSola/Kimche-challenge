import style from "./style.module.css"

const Footer = () => {
    return(
        <footer className={style.footer}>
            <p>Este proyecto es para <strong>Kimche</strong>, consiste en mostrar todos los personajes de Rick and Morty.</p>
            <p>Fue desarrolado con: <strong>Vite</strong>, <strong>React & Redux</strong>, <strong>GraphQl</strong>, <strong>Apollo Client</strong> y <strong>Module css</strong></p>
            <h4>autor: Damian Sola</h4>
            <p>Proyecto terminado el dia 3/04/2024 a las 21:50 hs Argentina</p>
        </footer>
    )
}

export default Footer;