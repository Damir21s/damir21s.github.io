import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./header.module.scss"
import logo from "../../picture/logo.svg"
let Header = () => {
    return (
        <header className={s.all}>
            <div className={s.header}>     
                <img alt="img" className={s.logo} src={logo} />
                <div className={s.menu}>
                    <NavLink to="" className={s.link}>Home</NavLink>
                    <NavLink to="/booking" className={s.link}>Booking</NavLink>
                    <NavLink to="/aboutus" className={s.link}>About us</NavLink>
                </div>
                <NavLink to="/booking" className={s.button}>Book now</NavLink>
            </div>
        </header>
    )
}
export default Header;