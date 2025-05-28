import React, { useEffect, useState } from 'react'
import {ReactComponent as ArrowLeft} from "../../../assets/icons/arrow-left.svg"
import Header from '../../Layouts/Header/Header'
import "./Catalog.css"
import Button from '../../Layouts/Buttons/Button'
import Showcase from '../Main/Showcase/Showcase'
import Roses from "../../../assets/images/roses.png";
import Flowers1 from "../../../assets/images/flovers1.png";
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
import Footer from '../../Layouts/Footer/Footer'
import { useMediaQuery } from 'react-responsive'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function Catalog() {

    const products1 = [
        { id: 1, src: Roses, heading: "Розы", price: "2290", oldPrice: "1299", linkOn: "roses"},
        { id: 2, src: Roses1, heading: "Розовый букет", price: "899", oldPrice: "1299", linkOn: "roses2"},
        { id: 3, src: Roses2, heading: "Сиреневые розы", price: "599", oldPrice: "1299", linkOn: "roses3"},
        { id: 4, src: Roses4, heading: "Желтые розы", price: "799", oldPrice: "1299", linkOn: "roses4"},
        { id: 5, src: Roses3, heading: "Розы гуд муд", price: "499", oldPrice: "1299", linkOn: "roses5"},
        { id: 6, src: Roses5, heading: "Яркий микс", price: "899", oldPrice: "1299", linkOn: "roses6"}
    ];

    const products2 = [
        { id: 1, src: Roses6, heading: "Розы Саммер", price: "999", oldPrice: "1299", linkOn: "roses7"},
        { id: 2, src: Roses7, heading: "Розы Love", price: "899", oldPrice: "1299", linkOn: "roses8"},
        { id: 3, src: Roses8, heading: "Ангел Бомбастик", price: "599", oldPrice: "1299", linkOn: "roses9"},
        { id: 4, src: Roses9, heading: "Розы Павлова", price: "799", oldPrice: "1299", linkOn: "roses10"},
        { id: 5, src: Roses10, heading: "Розы кахала", price: "499", oldPrice: "1299", linkOn: "roses11"},
        { id: 6, src: Roses11, heading: "Нежные пионовидные", price: "899", oldPrice: "1299", linkOn: "roses12"}
    ];

    const products3 = [
        { id: 1, src: Flowers1, heading: "Искусственные", price: "3199", linkOn: "composition1"},
        { id: 2, src: Roses2, heading: "Сиреневые розы", price: "899", linkOn: "composition2"},
        { id: 3, src: Roses3, heading: "Розы гуд муд", price: "499", linkOn: "composition3"},
    ];

    const products4 = [
        { id: 1, src: Roses7, heading: "Розы Love", price: "899", linkOn: "roses8"},
        { id: 2, src: Roses9, heading: "Розы Павлова", price: "799", linkOn: "roses10"},
        { id: 3, src: Roses11, heading: "Нежные пионовидные", price: "899", linkOn: "roses12"}
    ];

    var underLines = [true, true, true];

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    var cutProducts1 = [];
    var cutProducts2 = [];

    let location = useLocation();
    let category = location.search.slice(10);

    var linkTo = '';

    var oldPriceChange = false;
    var filterOn = false;

    if (category == "bouquet") {
        cutProducts1 = products1;
        cutProducts2 = products2;
        linkTo = 'bouquet';
    } else if (category == "compositions") {
        cutProducts1 = products3;
        cutProducts2 = products4;
        linkTo = 'composition';
    } else if (category == "same") {
        cutProducts1 = products1;
        cutProducts2 = products2;
        underLines = [true, false, false];
        linkTo = 'bouquet';
        filterOn = true;
    } else if (category == "stocks") {
        cutProducts1 = products1;
        cutProducts2 = products2;
        underLines = [true, false, false];
        linkTo = 'bouquet';
        oldPriceChange = true;
        filterOn = true;
    } 

    if (isSmallScreen) {
        cutProducts1 = cutProducts1.slice(0,2);
        cutProducts2 = cutProducts2.slice(0,2);
    } else {
        cutProducts1 = cutProducts1;
        cutProducts2 = cutProducts2;
    }

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
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
        <Showcase link="/catalog?category=same" linkTo={linkTo} filterOn={filterOn} products={cutProducts1} oldPrice={oldPriceChange} underLine={underLines[0]} BuyButton={true} title={"Букеты с розами"} useLinkOnItem={false}></Showcase>
        <Showcase link="/catalog?category=same" linkTo={linkTo} products={cutProducts2} oldPrice={oldPriceChange} underLine={underLines[1]} BuyButton={true} title={"Пионовидные розы"} useLinkOnItem={false}></Showcase>
        <Showcase link="/catalog?category=same" linkTo={linkTo} products={cutProducts2} oldPrice={oldPriceChange} underLine={underLines[2]} BuyButton={true} title={"Букеты из гипсофила"} useLinkOnItem={false}></Showcase>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default Catalog
