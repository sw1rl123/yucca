import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../../Layouts/Header/Header'
import Showcase from '../Main/Showcase/Showcase'
import Footer from '../../Layouts/Footer/Footer'
import Button from '../../Layouts/Buttons/Button'
import {ReactComponent as ArrowLeft} from "../../../assets/icons/arrow-left.svg"
import {ReactComponent as Info} from "../../../assets/icons/info.svg"
import Roses from "../../../assets/images/roses.png";
import Lilies from "../../../assets/images/lilies-of-the-valley.png";
import Daisies from "../../../assets/images/daisies.png";
import Chrysanthemums from "../../../assets/images/chrysanthemums.png";
import Cornflowers from "../../../assets/images/cornflowers.png";
import Gypsophiles from "../../../assets/images/gypsophiles.png";
import Аrtificial from "../../../assets/images/artificial.png";
import InBaskets from "../../../assets/images/in-the-baskets.png";
import InVases from "../../../assets/images/in-the-vases.png";
import Flowers1 from "../../../assets/images/flovers1.png";
import Flowers2 from "../../../assets/images/Flowers2.png";
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
import "./Product.css"
import { useLocation, useNavigate } from 'react-router-dom'

function Product() {

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' })

    const products1 = [
        { id: 1, src: Roses, heading: "Розы", price: "999"},
        { id: 2, src: Lilies, heading: "Ландыши", price: "899"},
        { id: 3, src: Daisies, heading: "Ромашки", price: "599"},
        { id: 4, src: Chrysanthemums, heading: "Хризантемы", price: "799"},
        { id: 5, src: Cornflowers, heading: "Васильки", price: "499"},
        { id: 6, src: Gypsophiles, heading: "Гипсофилы", price: "899"}
    ];

    const products3 = [
        { id: 1, src: Flowers2, heading: "Гипсофилы", price: "999"},
        { id: 2, src: Flowers3, heading: "Синие розы", price: "899"},
        { id: 3, src: Flowers4, heading: "Гортензии", price: "599"},
        { id: 4, src: Flowers5, heading: "Вибирнум", price: "799"},
        { id: 5, src: Flowers6, heading: "Васильки", price: "499"},
        { id: 6, src: Flowers7, heading: "Гиацинт", price: "899"}
    ];

    var sameProducts = null;

    const products2 = [
        { id: 1, src: InBaskets, heading: "В корзинах"},
        { id: 2, src: InVases, heading: "В вазах"},
        { id: 3, src: Аrtificial, heading: "Искусственные"},
    ];

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    let location = useLocation();
    let links = location.search.split("&");
    let title = links[0].slice(7);
    let productLink = links[1].slice(8);

    const product1 = {
        id: 1,
        img: Roses,
        title: "25 красных роз", 
        priceOld: "2999р.",
        priceNew: "2290р",
        desc: "Шикарные красные розы-настоящие любимицы прекрасных дам. <br/> Богатый красный цвет издавна является символом любви и восхищения. Купить недорого красные розы <br />Вы можете прямо сейчас в нашем магазине «YUCCA». <br />Стильный компактный букет станет отличным комплиментом для любимого и близкого человека. <br />Дарите эмоции!"
      };
      
      const product2 = {
        id: 2,
        img: Flowers1,
        title: "Искусственные цветы",
        priceOld: "3899р.",
        priceNew: "3199р",
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
        ['roses', product1],         // Розы (25 красных роз)
        ['roses2', product8],       // Розовый букет
        ['roses3', product3],       // Сиреневые розы
        ['roses4', product9],       // Желтые розы
        ['roses5', product4],       // Розы гуд муд
        ['roses6', product10],      // Яркий микс
        ['roses7', product11],      // Розы Саммер
        ['roses8', product5],       // Розы Love
        ['roses9', product12],      // Ангел Бомбастик
        ['roses10', product6],      // Розы Павлова
        ['roses11', product13],     // Розы кахала
        ['roses12', product7],      // Нежные пионовидные
        ['composition1', product2], // Искусственные цветы
        ['composition2', product3], // Сиреневые розы (дубль, но linkOn другой)
        ['composition3', product4]  // Розы гуд муд (дубль, но linkOn другой)
      ]);

    var productsList2 = new Map([
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
    
    const [count, setCount] = useState(0);

    useEffect(() => {

        const flowersCounter = () => {
            let productsMas = localStorage.getItem("cartProducts").split("&");
            let productsCountMas = localStorage.getItem("cartCount").split("&");
            let cutIndex = productsMas.indexOf(productsList.get(productLink).id + "");
            let countTemp = productsCountMas[cutIndex];

            setCount(countTemp);
        }
        

        flowersCounter();
    }, []);

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
            tempProducts.push([productsList2.get(productsMas[i]), countMas[i]]);
        }


    }

    const plusMinesProduct = (option) => {
        let productsMas = localStorage.getItem("cartProducts").split("&");
        let cutIndex = productsMas.indexOf(productsList.get(productLink).id + "");
        let countMas = localStorage.getItem("cartCount").split("&");

        if (option == "+") {
            setCount(Number(countMas[cutIndex]) + 1);
            countMas[cutIndex] = Number(countMas[cutIndex]) + 1 + "";
            let counts = countMas.join("&");
            localStorage.setItem("cartCount", counts);
        } else { 
            setCount(Number(countMas[cutIndex]) - 1);
            countMas[cutIndex] = Number(countMas[cutIndex]) - 1 + "";
            if (countMas[cutIndex] == '0') {
                DeleteProduct(productsList.get(productLink).id);
                return
            } else {
                let counts = countMas.join("&");
                localStorage.setItem("cartCount", counts);
            }
        }


    }

    const reloadButton = () => {
        setCount(1);
    }

    var product = null;

    var cartName = null;

    if (title == "bouquet") {
        sameProducts = products1;
        product = productsList.get(productLink);
        cartName = productsList.get(productLink).id + "&";
    } else {
        sameProducts = products3;
        product = productsList.get(productLink);
        cartName = productsList.get(productLink).id + "&";
    }

    const toBouquet = () => {
        navigate("/catalog?category=bouquet");
    }

    const toCompositions = () => {
        navigate("/catalog?category=compositions");
    }

    const toStocks = () => {
        navigate("/catalog?category=stocks");
    }

  return (
    <div className='wrapper'>
       <Header/>
       <div className="catalog__wrapper">
        {!isSmallScreen &&
            <ul className="catalog__navbar">
            <ArrowLeft onClick={(e) => goBack()} className='catalog__navbar__icon'></ArrowLeft>
            <li onClick={(e) => toBouquet()} className='catalog__navbar__item'><Button instedColor={true} text={"Букеты"} fz={"2"} padding={"55"}></Button></li>
            <li onClick={(e) => toCompositions()} className='catalog__navbar__item'><Button instedColor={true} text={"Композиции"} fz={"2"} padding={"55"}></Button></li>
            <li onClick={(e) => toStocks()} className='catalog__navbar__item'><Button instedColor={true} text={"Акции"} fz={"2"} padding={"55"}></Button></li>
        </ul>}
        <div className="product__wrapper">
            <img src={product.img} alt="" className="card__img" />
            <div className="card_column">
                <h3 className="card__heading">{product.title}</h3>
                <div className="card__price"><span className="card__price--old">{product.priceOld}</span><span className="card__price--new">{product.priceNew}</span></div>
                <span className="card__warranty"><Info className='card__warranty__icon'></Info> Гарантия качества</span>
                <div className='card__wrapper'>
                    <div className="card__second-wrapper">
                        <div className="card__parameters">
                            <h4 className="card__parameters__heading">Упаковка</h4>
                            <ul className="card__list card__list1">
                                <li className="card__item" width="400px"><label><input type="radio" name="box"/>Без упаковки</label></li>
                                <li className="card__item" width="400px"><label><input type="radio" name="box"/>Крафт бумага + 190р.</label></li>
                                <li className="card__item" width="400px"><label><input type="radio" name="box"/>Цветная матовая пленка + 190р.</label></li>
                            </ul>
                        </div>
                        <div className="card__parameters">
                            <h4 className="card__parameters__heading">Кол-во</h4>
                            <ul className="card__list card__list2">
                                <li className="card__item"><label><input type="radio" name="count"/>Поштучно</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>3</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>7</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>11</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>17</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>25</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>31</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>51</label></li>
                                <li className="card__item"><label><input type="radio" name="count"/>101</label></li>
                            </ul>
                        </div>
                        <div className="card__parameters">
                            <h4 className="card__parameters__heading">Высота</h4>
                            <ul className="card__list card__list3">
                                <li className="card__item"><label><input type="radio" name="height"/>50 см</label></li>
                                <li className="card__item"><label><input type="radio" name="height"/>60 см</label></li>
                                <li className="card__item"><label><input type="radio" name="height"/>70 см</label></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__description">
                        <h4 className="card__description__heading">Описание</h4>
                        <p className="card__description__text" dangerouslySetInnerHTML={{__html: product.desc}}></p>
                    </div>
                </div>
                {!count && <Button plusMines={() => reloadButton()} className="card__button" instedColor={true} text={"В корзину"} fz={"1.5"} padding={"55"} addToCart={cartName}></Button>}
                {!!count && <span className="card__button-plus-mines"><span onClick={() => plusMinesProduct('-')}>-</span><p className="card__button-plus-mines-count">{count}</p><span onClick={() => plusMinesProduct('+')}>+</span></span>}
            </div>
        </div>
        <Showcase link="/catalog?category=bouquet" underLine={true} products={sameProducts} BuyButton={true} title={"Похожие товары"} useLinkOnItem={false} flexWrap={true}></Showcase>
        <Showcase products={products2} underLine={true} BuyButton={false} title={"Композиции"} useLinkOnItem={true}></Showcase>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default Product
