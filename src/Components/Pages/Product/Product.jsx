import React from 'react'
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
    let title = location.search.slice(7);

    const product1 = {img: Roses, title: "25 красных роз", priceOld: "2999р.", priceNew: "2290р", desc: "Шикарные красные розы-настоящие любимицы прекрасных дам. <br/> Богатый красный цвет издавна является символом любви и восхищения. Купить недорого красные розы <br />Вы можете прямо сейчас в нашем магазине «YUCCA». <br />Стильный компактный букет станет отличным комплиментом для любимого и близкого человека. <br />Дарите эмоции!"}
    const product2 = {img: Flowers1, title: "Искусственные цветы", priceOld: "3899р.", priceNew: "3199р", desc: "Купить недорого композицию из стабилизированных растений в кашпо вы можете прямо сейчас в нашем магазине «YUCCA»."}

    var product = null;

    var cartName = null;

    if (title == "bouquet") {
        sameProducts = products1;
        product = product1;
        cartName = "bouquet";
    } else {
        sameProducts = products3;
        product = product2
        cartName = "composition"
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
                                <li className="card__item" width="400px">Без упаковки</li>
                                <li className="card__item" width="400px">Крафт бумага + 190р.</li>
                                <li className="card__item" width="400px">Цветная матовая пленка + 190р.</li>
                            </ul>
                        </div>
                        <div className="card__parameters">
                            <h4 className="card__parameters__heading">Кол-во</h4>
                            <ul className="card__list card__list2">
                                <li className="card__item">Поштучно</li>
                                <li className="card__item">3</li>
                                <li className="card__item">7</li>
                                <li className="card__item">11</li>
                                <li className="card__item">17</li>
                                <li className="card__item">25</li>
                                <li className="card__item">31</li>
                                <li className="card__item">51</li>
                                <li className="card__item">101</li>
                            </ul>
                        </div>
                        <div className="card__parameters">
                            <h4 className="card__parameters__heading">Высота</h4>
                            <ul className="card__list card__list3">
                                <li className="card__item">50 см</li>
                                <li className="card__item">60 см</li>
                                <li className="card__item">70 см</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card__description">
                        <h4 className="card__description__heading">Описание</h4>
                        <p className="card__description__text" dangerouslySetInnerHTML={{__html: product.desc}}></p>
                    </div>
                </div>
                <Button className="card__button" instedColor={true} text={"Купить"} fz={"2"} padding={"55"} addToCart={cartName}></Button>
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
