import React from 'react';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import HeroImage from '../../../assets/images/hero-image.png';
import Slider from './Slider/Slider';
import Button from "../../Layouts/Buttons/Button";
import Showcase from './Showcase/Showcase';
import Roses from "../../../assets/images/roses.png";
import Lilies from "../../../assets/images/lilies-of-the-valley.png";
import Daisies from "../../../assets/images/daisies.png";
import Chrysanthemums from "../../../assets/images/chrysanthemums.png";
import Cornflowers from "../../../assets/images/cornflowers.png";
import Gypsophiles from "../../../assets/images/gypsophiles.png";
import Аrtificial from "../../../assets/images/artificial.png";
import InBaskets from "../../../assets/images/in-the-baskets.png";
import InVases from "../../../assets/images/in-the-vases.png";
import { useMediaQuery } from 'react-responsive';
import "./Main.css";
import { Link } from 'react-router-dom';

function Main() {

    const products1 = [
        { id: 1, src: Roses, heading: "Розы", price: "999"},
        { id: 2, src: Lilies, heading: "Ландыши", price: "899"},
        { id: 3, src: Daisies, heading: "Ромашки", price: "599"},
        { id: 4, src: Chrysanthemums, heading: "Хризантемы", price: "799"},
        { id: 5, src: Cornflowers, heading: "Васильки", price: "499"},
        { id: 6, src: Gypsophiles, heading: "Гипсофилы", price: "899"}
    ];

    const products2 = [
        { id: 1, src: InBaskets, heading: "В корзинах"},
        { id: 2, src: InVases, heading: "В вазах"},
        { id: 3, src: Аrtificial, heading: "Искусственные"},
    ];

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' })

    var cutProducts = [];

    if (isSmallScreen) {
        cutProducts = products1.slice(0,2);
    } else {
        cutProducts = products1;
    }

  return (
    <div className="wrapper">
        <Header headerStyle={"header--another"}/>
        <section className="hero">
        <span className="wrapper-decoration" id="dec-left-bottom"></span>
        <span className="wrapper-decoration" id="dec-right-top"></span>
        <div className='hero__wrapper'><img className='hero__image' src={HeroImage} alt=""/></div>
        <Slider></Slider>
        </section>
        <section className="offers">
            {!isSmallScreen &&
            <div className="offers__buttons">
                <Link to="/catalog?category=stocks"><Button text={"Акции"} fz={"2"} padding={"65"}></Button></Link>
                <Link to="/catalog?category=compositions"><Button text={"Композиции"} fz={"2"} padding={"65"}></Button></Link>
            </div>
            }
            <Showcase link="/catalog?category=bouquet" linkTo={"bouquet"} underLine={true} products={cutProducts} BuyButton={true} title={"Букеты"} useLinkOnItem={false}></Showcase>
            <Showcase link="/catalog?category=compositions" underLine={true} products={products2} BuyButton={false} title={"Композиции"} useLinkOnItem={true}></Showcase>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default Main
