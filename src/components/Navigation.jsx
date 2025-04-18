import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () =>{
    return(
        <header className={s.navigation}>
            <NavLink to="/" className={s.navLink}>Home</NavLink>
            <NavLink to="/movies" className={s.navLink}>Movies</NavLink>
        </header>
    )
}

export default Navigation;