import React, { useEffect, useState } from 'react'
import Header from '../../Layouts/Header/Header'
import Footer from '../../Layouts/Footer/Footer'
import {ReactComponent as Delete} from "../../../assets/icons/delete.svg"
import Button from '../../Layouts/Buttons/Button'
import Roses from "../../../assets/images/roses.png";
import Flowers1 from "../../../assets/images/flovers1.png";
import "./Cart.css"
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function Cart() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' })
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 700px)' })

    const [cartCountBouquet, setCartCountBouquet] = useState(0);
    const [cartCountComposition, setCartCountComposition] = useState(0);

    useEffect(() => {
        var count = localStorage.getItem("cartCountBouquet");
        setCartCountBouquet(count);
        var count = localStorage.getItem("cartCountComposition");
        setCartCountComposition(count);
    }, []);

    const [onOrder, setOnOrder] = useState(false);

    const onOrdering = () => {
        localStorage.removeItem("cartCount");
        setOnOrder(true);
    };

    const DeleteProduct = (a) => {
        if (a == 1) {
            var count = localStorage.getItem("cartCountBouquet");
            count--;
            localStorage.setItem("cartCountBouquet", count)
            setCartCountBouquet(count);
        } else {
            var count = localStorage.getItem("cartCountComposition");
            count--;
            localStorage.setItem("cartCountComposition", count)
            setCartCountComposition(count);
        }
    }

  return (
    <div className='wrapper'>
       <Header/>
       {onOrder &&
        <div className="cart__wrapper--ordered">
            <h2 className="cart__heading--ordered">Спасибо за покупку</h2>
            <Link to="/" className="cart__link--ordered">На главную</Link>
        </div>
       }
       {!onOrder &&
        <div className="cart__wrapper">
            {!isSmallerScreen && <h1 className="cart__heading">Корзина</h1>}
            <section className="cart__products">
            {(cartCountBouquet != 0 || cartCountComposition != 0) && <ul className="cart__list">
                {(cartCountBouquet != 0 && cartCountBouquet) && <li className="cart__item">
                    <Delete onClick={(e) => DeleteProduct(1)} className='cart__icon'></Delete>
                    <img src={Roses} alt="" className="cart__img" />
                    <div className="cart__item__wrapper">
                        <h2 className="cart__title">25 красных роз</h2>
                        {!isSmallerScreen &&
                            <p className="cart__description">Шикарные красные розы-настоящие любимицы прекрасных дам. Богатый красный цвет издавна является символом любви и восхищения. Купить недорого красные розы <br />
                            Вы можете прямо сейчас в нашем магазине «YUCCA». <br />
                            Стильный компактный букет станет отличным комплиментом для любимого и близкого человека. <br />
                            Дарите эмоции!
                        </p>}
                        <div className="cart__total">
                            <span className="cart__count">{"Количество: " + cartCountBouquet}</span>
                            <span className="cart__price">{2290 * cartCountBouquet + "р."}</span>
                        </div>
                    </div>
                </li>}
                {(cartCountComposition != 0 && cartCountComposition) && <li className="cart__item">
                    <Delete onClick={(e) => DeleteProduct(2)} className='cart__icon'></Delete>
                    <img src={Flowers1} alt="" className="cart__img" />
                    <div className="cart__item__wrapper">
                        <h2 className="cart__title">Искусственные цветы</h2>
                        {!isSmallerScreen &&
                            <p className="cart__description">Купить недорого композицию из стабилизированных растений в кашпо вы можете прямо сейчас в нашем магазине «YUCCA».
                        </p>}
                        <div className="cart__total">
                            <span className="cart__count">{"Количество: " + cartCountComposition}</span>
                            <span className="cart__price">{3199 * cartCountComposition + "р."}</span>
                        </div>
                    </div>
                </li>}
            </ul>}
            <span className="cart__total-price">{"Итого: " + ((2290 * cartCountBouquet) + (3199 * cartCountComposition)) + "р."}</span>
            <div className="cart__coupon">
                <p className="cart__coupon__heading">Есть купон?</p>
                <input type="text" className="cart__coupon__input" />
                <span className="cart__coupon__button">Применить купон</span>
            </div>
            </section>
            <section className='cart__order'>
            <h2 className="cart__order__heading">Оформление заказа</h2>
            <div className="cart__order__form order">
                <div className="order__wrapper">
                    <h3 className="order__heading">Получатель</h3>
                    <label className="order__label">Имя <input type="text" className="order__input" /></label>
                    <label className="order__label">Фамилия <input type="text" className="order__input" /></label>
                    <label className="order__label">Email <input type="text" className="order__input" /></label>
                    <label className="order__label">Телефон <input type="text" className="order__input" /></label>
                </div>
                <div className="order__wrapper">
                    <h3 className="order__heading">Доставка <span className="order__span">Бесплатная</span></h3>
                    <label className="order__label">Город <input type="text" className="order__input" /></label>
                    <label className="order__label">Улица <input type="text" className="order__input" /></label>
                    <label className="order__label">Дом <input type="text" className="order__input" /></label>
                    <label className="order__label">Квартира <input type="text" className="order__input" /></label>
                </div>
            </div>
            <div className="cart__order__time">
                <h3 className="cart__order__time__heading">Время доставки</h3>
                <ul className="cart__order__time__list">
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Пн</span> : <span className="cart__orader__label__span">Понедельник</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Вт</span> : <span className="cart__orader__label__span">Вторник</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Ср</span> : <span className="cart__orader__label__span">Среда</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Чт</span> : <span className="cart__orader__label__span">Четверг</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Пт</span> : <span className="cart__orader__label__span">Пятница</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Сб</span> : <span className="cart__orader__label__span">Суббота</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                    <li className="cart__order__time__item"><label className="cart__orader__time__label">{isSmallScreen ? <span className="cart__orader__label__span2">Вс</span> : <span className="cart__orader__label__span">Воскресенье</span>}<input type="radio" name="day" className="cart__orader__time__radio" /></label></li>
                </ul>
            </div>
            <button className='cart__button' onClick={(e) => onOrdering()}>Оформить заказ</button>
            </section>
       </div>}
       <Footer></Footer>
    </div>
  )
}

export default Cart
