import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink className={style.link} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink className={style.link} to="/employees">
                            Employees
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;