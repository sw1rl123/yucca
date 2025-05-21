import React, { use, useEffect, useState } from 'react'
import {ReactComponent as Logo} from "../../../assets/icons/logo.svg"
import {ReactComponent as Cart} from "../../../assets/icons/cart.svg"
import {ReactComponent as Burger} from "../../../assets/icons/burger.svg"
import { Link } from 'react-router-dom'
import "./Header.css"

function Header({headerStyle}) {

    const [headerStyles, setHeaderStyles] = useState('header');
    const [openMenu, setOpenMenu] = useState('');
    const [menuOpacity, setMenuOpacity] = useState(0);

    useEffect(() => {
        if (headerStyle) {{
            setHeaderStyles(headerStyles + " " + headerStyle);
        }}
    }, []);

    const openCLoseMenu = () => {
        if (openMenu) {
            setOpenMenu('');
            setMenuOpacity(0);
        } else {
            setOpenMenu(' header__burger-list--open');
            setMenuOpacity(1);
        }
    }

    return (
        <header className={headerStyles}>
            <div className="header__wrapper">
                <Link to="/" className='header__logo'><Logo/></Link>
                <Burger onClick={(e) => openCLoseMenu()} className='header__burger'></Burger>
                <ul className={"header__burger-list" + openMenu}>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/">Главная</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/about">О сервисе</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/faq">Доставка</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/contacts">Контакты</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/faq">Оплата</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/catalog?category=bouquet">Букеты</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/catalog?category=compositions">Композиции</Link></li>
                    <li className="header__burger-item"><Link onClick={(e) => openCLoseMenu()} to="/catalog?category=stocks">Акции</Link></li>
                </ul>
                <div className="overlay" onClick={(e) => openCLoseMenu()}></div>
                <ul className="header__list">
                    <li className="header__item"><Link to="/">Главная</Link></li>
                    <li className="header__item"><Link to="/about">О сервисе</Link></li>
                    <li className="header__item"><Link to="/faq">Доставка</Link></li>
                    <li className="header__item"><Link to="/contacts">Контакты</Link></li>
                    <li className="header__item"><Link to="/faq">Оплата</Link></li>
                </ul>
                <h2 className="header__title">yucca</h2>
                <Link to="/cart" className="header__link"><Cart className='header__link-icon'/><span>Корзина</span></Link>
            </div>
        </header>
    )
}

export default Header
