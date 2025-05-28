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
import Flowers3 from "../../../assets/images/Flowers3.png";
import Flowers4 from "../../../assets/images/Flowers4.png";
import Flowers5 from "../../../assets/images/Flowers5.png";
import Flowers6 from "../../../assets/images/Flowers6.png";
import Flowers7 from "../../../assets/images/Flowers7.png";
import Roses1 from "../../../assets/images/roses1.png";
import Roses2 from "../../../assets/images/roses2.png";
import Roses3 from "../../../assets/images/roses3.png";
import Roses4 from "../../../assets/images/roses4.png";
import Roses5 from "../../../assets/images/roses5.png";
import Roses6 from "../../../assets/images/roses6.png";
import Roses7 from "../../../assets/images/roses7.png";
import Roses8 from "../../../assets/images/roses8.png";
import Roses9 from "../../../assets/images/roses9.png";
import Roses10 from "../../../assets/images/roses10.png";
import Roses11 from "../../../assets/images/roses11.png";

function Cart() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' })
    const isSmallerScreen = useMediaQuery({ query: '(max-width: 700px)' })

    const product1 = {
            id: 1,
            img: Roses,
            title: "25 красных роз", 
            priceOld: "2999р.",
            priceNew: "2290р.",
            desc: "Шикарные красные розы-настоящие любимицы прекрасных дам. Богатый красный цвет издавна является символом любви и восхищения. Купить недорого красные розы. Вы можете прямо сейчас в нашем магазине «YUCCA». Стильный компактный букет станет отличным комплиментом для любимого и близкого человека. Дарите эмоции!"
        };
          
    const product2 = {
            id: 2,
            img: Flowers1,
            title: "Искусственные цветы",
            priceOld: "3899р.",
            priceNew: "3199р.",
            desc: "Купить недорого композицию из стабилизированных растений в кашпо вы можете прямо сейчас в нашем магазине «YUCCA»."
        };
          
    const product3 = {
        id: 3,
        img: Roses2,
        title: "Сиреневые розы",
        priceOld: "899р.",
        priceNew: "810р.",
        desc: "Очаровательные сиреневые розы с тонким ароматом создадут атмосферу уюта и романтики. Отличный вариант для подарка или декора праздника."
    };
        
    const product4 = {
        id: 4,
        img: Roses3,
        title: "Розы Гуд муд",
        priceOld: "499р.",
        priceNew: "450р.",
        desc: "Эксклюзивные розы 'Гуд муд' с бархатными лепестками глубокого оттенка станут стильным акцентом в вашем интерьере. Идеальный выбор для ценителей необычных цветов."
    };
        
    const product5 = {
        id: 5,
        img: Roses7,
        title: "Розы Love",
        priceOld: "899р.",
        priceNew: "810р.",
        desc: "Романтичные розы 'Love' с нежными переливами розового - идеальный способ выразить свои чувства. Эти цветы сохраняют свежесть до 3 недель."
    };
        
    const product6 = {
        id: 6,
        img: Roses9,
        title: "Розы Павлова",
        priceOld: "799р.",
        priceNew: "720р.",
        desc: "Элегантные розы 'Павлова' с крупными бутонами и тонким ароматом - премиальный выбор для особенных случаев. Отличаются особой стойкостью в срезке."
    };
        
    const product7 = {
        id: 7,
        img: Roses11,
        title: "Нежные пионовидные",
        priceOld: "899р.",
        priceNew: "810р.",
        desc: "Пышные пионовидные розы с нежнейшими лепестками создадут атмосферу уюта и роскоши. Идеальны для свадебных букетов и романтических подарков."
    };
        
    const product8 = {
        id: 8,
        img: Roses1,
        title: "Розовый букет",
        priceOld: "899р.",
        priceNew: "810р.", 
        desc: "Нежный розовый букет из свежайших сезонных цветов - воплощение весеннего настроения. Идеально подходит для подарка на день рождения или без повода."
    };
        
    const product9 = {
        id: 9,
        img: Roses4,
        title: "Желтые розы",
        priceOld: "799р.",
        priceNew: "720р.",
        desc: "Солнечные желтые розы с яркими лепестками подарят теплое настроение и станут символом дружбы, радости и заботы. Отличный выбор для поднятия настроения!"
    };
        
    const product10 = {
        id: 10,
        img: Roses5,
        title: "Яркий микс",
        priceOld: "899р.",
        priceNew: "810р.",
        desc: "Яркий микс из сезонных цветов создаст праздничное настроение и станет эффектным украшением любого интерьера. Каждый букет уникален и собран вручную."
    };
        
    const product11 = {
        id: 11,
        img: Roses6,
        title: "Розы Саммер",
        priceOld: "999р.",
        priceNew: "900р.",
        desc: "Свежие и ароматные розы 'Саммер' с крупными бутонами насыщенного цвета. Идеальный выбор для летних букетов и подарков с теплыми пожеланиями."
    };
        
    const product12 = {
        id: 12,
        img: Roses8,
        title: "Ангел Бомбастик", 
        priceOld: "599р.",
        priceNew: "540р.",
        desc: "Экстравагантные розы 'Ангел Бомбастик' с крупными махровыми бутонами необычной формы. Яркий акцент для смелых floral-решений."
    };
        
    const product13 = {
        id: 13,
        img: Roses10,
        title: "Розы Кахала",
        priceOld: "499р.",
        priceNew: "450р.",
        desc: "Экзотические розы 'Кахала' с персиково-розовыми лепестками и изысканной формой бутона. Редкий сорт для ценителей утонченной красоты."
    };

    var productsList = new Map([
        ['1', product1],         // Розы (25 красных роз)
        ['8', product8],       // Розовый букет
        ['3', product3],       // Сиреневые розы
        ['9', product9],       // Желтые розы
        ['4', product4],       // Розы гуд муд
        ['10', product10],      // Яркий микс
        ['11', product11],      // Розы Саммер
        ['5', product5],       // Розы Love
        ['12', product12],      // Ангел Бомбастик
        ['6', product6],      // Розы Павлова
        ['13', product13],     // Розы кахала
        ['7', product7],      // Нежные пионовидные
        ['2', product2], // Искусственные цветы
    ]);

    const [cartProducts, setCartProducts] = useState(null);
    const [cartSum, setCartSum] = useState(1);


    useEffect(() => {
        let productsMas = localStorage.getItem("cartProducts").split("&");
        let productsCountMas = localStorage.getItem("cartCount").split("&");
        let sumTemp = 0;

        for (let i = 0; i < productsMas.length - 1; i++) {
            sumTemp += Number(productsCountMas[i]) * Number(productsList.get(productsMas[i]).priceNew.slice(0, -2));
        }

        setCartSum(sumTemp);
    }, [cartProducts]);

    useEffect(() => {
        
        const flowersCounter = () => {
            let productsMas = localStorage.getItem("cartProducts").split("&");
            let productsCountMas = localStorage.getItem("cartCount").split("&");
            let tempProducts = [];
            let sumTemp = 0;

            for (let i = 0; i < productsMas.length - 1; i++) {
                tempProducts.push([productsList.get(productsMas[i]), productsCountMas[i]]);
                sumTemp += Number(productsCountMas[i]) * Number(productsList.get(productsMas[i]).priceNew.slice(0, -2));
            }

            setCartProducts(tempProducts);
            setCartSum(sumTemp);
        }
        

        flowersCounter();
    }, []);

    const [onOrder, setOnOrder] = useState(false);

    const onOrdering = () => {
        setOnOrder(true);
    };

    const DeleteProduct = (a) => {
        let productsMas = localStorage.getItem("cartProducts").split("&");
        let cutIndex = productsMas.indexOf(a + "");
        productsMas.splice(cutIndex, 1);
        let products = productsMas.join("&");

        let countMas = localStorage.getItem("cartCount").split("&");
        countMas.splice(cutIndex, 1);
        let counts = countMas.join("&");

        localStorage.setItem("cartProducts", products);
        localStorage.setItem("cartCount", counts);

        let tempProducts = [];

        for (let i = 0; i < productsMas.length - 1; i++) {
            tempProducts.push([productsList.get(productsMas[i]), countMas[i]]);
        }

        setCartProducts(tempProducts);

    }

    const plusMinesProduct = (a, option) => {
        let productsMas = localStorage.getItem("cartProducts").split("&");
        let cutIndex = productsMas.indexOf(a + "");
        let countMas = localStorage.getItem("cartCount").split("&");

        if (option == "+") {
            countMas[cutIndex] = Number(countMas[cutIndex]) + 1 + "";
            let counts = countMas.join("&");
            localStorage.setItem("cartCount", counts);
        } else { 
            countMas[cutIndex] = Number(countMas[cutIndex]) - 1 + "";
            if (countMas[cutIndex] == '0') {
                DeleteProduct(a);
                return
            } else {
                let counts = countMas.join("&");
                localStorage.setItem("cartCount", counts);
            }
        }

        let tempProducts = [];

        for (let i = 0; i < productsMas.length - 1; i++) {
            tempProducts.push([productsList.get(productsMas[i]), countMas[i]]);
        }

        setCartProducts(tempProducts);

    }

  return (
    <div className='wrapper'>
       <Header/>
       {onOrder &&
        <div className="cart__wrapper--ordered">
            <h2 className="cart__heading--ordered">Спасибо за покупку</h2>
            <Link to="/" className="cart__link--ordered">На главную</Link>
            <p className="cart__text-ordered">Изменения статуса заказа #76546 
            отслеживайте по почте  </p>
        </div>
       }
       {!onOrder &&
        <div className="cart__wrapper">
            {!isSmallerScreen && <h1 className="cart__heading">Корзина</h1>}
            <section className="cart__products">
            {cartProducts && <ul className="cart__list">
                {cartProducts.map(product =>
                <li key={product[0].id} className="cart__item">
                    <Delete onClick={(e) => DeleteProduct(product[0].id)} className='cart__icon'></Delete>
                    <img src={product[0].img} alt="" className="cart__img" />
                    <div className="cart__item__wrapper">
                        <h2 className="cart__title">{product[0].title}</h2>
                        {!isSmallerScreen &&
                            <p className="cart__description">{product[0].desc}</p>
                        }
                        <div className="cart__total">
                            <span className="cart__count"><span className="cart__add-button" onClick={() => plusMinesProduct(product[0].id, '-')}>-</span>{"Количество: " + product[1]}<span className="cart__add-button" onClick={() => plusMinesProduct(product[0].id, '+')}>+</span></span>
                            <span className="cart__price">{Number(product[0].priceNew.slice(0, -2)) * product[1] + "р."}</span>
                        </div>
                    </div>
                </li>)}
            </ul>}
            <span className="cart__total-price">{"Итого: " + cartSum + "р."}</span>
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
