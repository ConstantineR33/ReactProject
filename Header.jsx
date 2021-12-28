import React from "react";
import s from './Header.module.css';

function Header() {

    return (
        <header className={s.header}>
            <img className={s.imageHeader} src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png"></img>
        </header>
    )
}

export default Header;
