import React from 'react'
import Header from '../../Layouts/Header/Header'
import Footer from '../../Layouts/Footer/Footer'
import {ReactComponent as ArrowLeft} from "../../../assets/icons/arrow-left.svg"
import Button from '../../Layouts/Buttons/Button'
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from 'react-router-dom'
import "./About.css"

function About() {

  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

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
       <Header />
       <div className="info__wrapper">
          <h1 className="info__heading">О нас</h1>
          <h2 className="info__subheading">Доставим цветы по вашему желанию!</h2>
          <p className="info__text">
          Мы рады приветствовать вас в нашем интернет-магазине цветов YUCCA.
          Вот уже 14 лет Мы дарим ароматно-букетное счастье, любуемся сиянием очарованных глаз наших клиентов и помогаем воплощать в жизнь самые смелые, самые светлые и многообещающие мечты в реальность.
          </p>
          <p className="info__text">
          Мы стремительно развивающаяся компания. 
          У нас 19 розничных магазинов в Москве и Подмосковье, работает Интернет-магазин, занимаемся крупными и мелкими оптовыми продажами, проводим мастер-классы, оформляем мероприятия и праздники, доставляем подарки и различные аксессуары. Наша команда состоит из молодых и ярких сотрудников, которые никогда не оставят Вас без внимания, мы всегда поможем и проконсультируем Вас по любому интересующему вопросы.
          </p>
          <h2 className="info__subheading">Цветы — это наше хобби, Наша любовь и призвание.</h2>
          <p className="info__text">В нашем каталоге Вы найдете букет или композицию для любого, даже самого уникального, жизненного случая по самым приятным ценам. Наши консультанты с удовольствием помогут Вам подобрать вариант для вашей конкретной ситуации, если вы теряетесь в выборе из нашего многообразного количества композиций. У нас вы найдете как простые варианты из скромных и нежных цветов детства, так и пышные букеты из роскошных цветов, достойных королевы или короля.</p>
          <h2 className="info__subheading">Никто не останется равнодушным!</h2>
          <p className="info__text">Мы используем только самые свежие, крепкие и долгоиграющие цветы, высококачественные флористические инструменты и современные аксессуары, наши опытные флористы всегда готовы проконсультировать и помочь в выборе. Мы следим за сезонными флористическими тенденциями и предлагаем нашим клиентам самые актуальные новинки.</p>
          <p className="info__text">Мы использует особенную уникальную упаковку для доставки — поэтому мы гарантируем здоровье и великолепный внешний вид всем цветам из нашего магазина!</p> 
          <p className="info__text">Закажите цветы на юбилей, свадьбу, выпускной, корпоративный праздник или любое важное для Вас события - реализуем все Ваши самые смелые фантазии! Мы разбираемся в цветочных вопросах профессионально — знаем наверняка, что можно подарить девушке, женщине, ребенку, мужчине любого возраста и социального статуса.</p>
          <h2 className="info__subheading">Мы будем рады видеть Вас в числе наших постоянных клиентов!</h2>
          {!isSmallScreen &&
            <ul className="catalog__navbar">
            <ArrowLeft onClick={(e) => goBack()} className='catalog__navbar__icon'></ArrowLeft>
            <li onClick={(e) => toBouquet()} className='catalog__navbar__item'><Button text={"Букеты"} fz={"1.5"} padding={"55"}></Button></li>
            <li onClick={(e) => toCompositions()} className='catalog__navbar__item'><Button text={"Композиции"} fz={"1.5"} padding={"55"}></Button></li>
            <li onClick={(e) => toStocks()} className='catalog__navbar__item'><Button text={"Акции"} fz={"1.5"} padding={"55"}></Button></li>
        </ul>}
       </div>
       <Footer></Footer>
    </div>
  )
}

export default About
