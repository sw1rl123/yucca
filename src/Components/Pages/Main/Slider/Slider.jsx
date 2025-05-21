import React, { useState } from 'react'
import HeroSkiderImage1 from '../../../../assets/images/hero-slider-image1.png';
import HeroSkiderImage2 from '../../../../assets/images/hero-slider-image2.png';
import {ReactComponent as Arrow45} from "../../../../assets/icons/arrow45.svg"
import {ReactComponent as Bud} from "../../../../assets/icons/bud.svg"
import "./Slider.css"
import { Link } from 'react-router-dom';

function Slider() {

    const [sliderActiveItem, setSliderActiveItem] = useState([true, false]);

    const onSlide = (number) =>  {
        let tempSlider = [false, false];
        tempSlider[number - 1] = true;
        setSliderActiveItem(tempSlider);
    }

  return (
        <div className="hero__slider">
            <ul className="hero__slider__list">
                <li className={sliderActiveItem[0] ? "hero__slider__item hero__slider__item--active" : "hero__slider__item"}>
                    <Link to="/catalog?category=bouquet" className="hero__slider__title">На свадьбу</Link>
                    <Arrow45 className='hero__slider__icon'></Arrow45>
                    <img src={HeroSkiderImage1} alt="" className="hero__slider__img"/>
                </li>
                <li className={sliderActiveItem[1] ? "hero__slider__item hero__slider__item--active" : "hero__slider__item"}>
                    <Link to="/catalog?category=bouquet" className="hero__slider__title">На свидание</Link>
                    <Arrow45 className='hero__slider__icon'></Arrow45>
                    <img src={HeroSkiderImage2} alt="" className="hero__slider__img"/>
                </li>
            </ul>
            <div className="hero__slider__pagination">
                <label className='hero__slider__label' onClick={(e) => onSlide(1)}><Bud></Bud><input type="radio" defaultChecked className="hero__slider__input" name="bouquet"/></label>
                <label className='hero__slider__label' onClick={(e) => onSlide(2)}><Bud></Bud><input type="radio" className="hero__slider__input" name="bouquet"/></label>
            </div>
        </div>
  )
}

export default Slider
