import React from 'react'
import {ReactComponent as Logo} from "../../../assets/icons/logo.svg"
import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <ul className="footer__list--small">
        <li className="footer__item"><Link to="/about">О нас</Link></li>
        <li className="footer__item"><Link to="/contacts">Контакты</Link></li>
        <li className="footer__item"><Link to="/warranty">Гарантия качества</Link></li>
        <li className="footer__item"><Link to="/delivery">Доставка</Link></li>
        <li className="footer__item"><Link to="/payment">Оплата</Link></li>
        <li className="footer__item"><Link to="/faq">Вопросы и ответы</Link></li>
      </ul>
      <div className="footer__brand">
        <Logo className='footer__logo'/>
        <h2 className="footer__title">yucca</h2>
      </div>
      <ul className="footer__list">
        <li className="footer__item"><Link to="/about">О нас</Link></li>
        <li className="footer__item"><Link to="/contacts">Контакты</Link></li>
        <li className="footer__item"><Link to="/warranty">Гарантия качества</Link></li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item"><Link to="/faq">Доставка</Link></li>
        <li className="footer__item"><Link to="/faq">Оплата</Link></li>
        <li className="footer__item"><Link to="/faq">Вопросы и ответы</Link></li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">+7 (999) 99-99 999</li>
        <li className="footer__item">yuccastore@ghmail.com</li>
      </ul>
    </footer>
  )
}

export default Footer
