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
                            Главная
                        </NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink className={style.link} to="/employees">
                            Сотрудники
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <ul className={style.userNavigation}>
                <li className={style.item}>
                    <NavLink className={style.link} to={'/login'}>
                        Вход
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;