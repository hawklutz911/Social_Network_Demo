import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className= {s.header}>
        <img src='https://cdn.dribbble.com/users/13604/screenshots/7557893/image.png' alt="logo" />
        <div className={s.loginBlock}> { props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}
export default Header;