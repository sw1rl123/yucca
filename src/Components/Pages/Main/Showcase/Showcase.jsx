import React, { useState } from 'react'
import {ReactComponent as ArrowRight} from "../../../../assets/icons/arrow-right.svg"
import Button from "../../../Layouts/Buttons/Button";
import {ReactComponent as Arrow45} from "../../../../assets/icons/arrow45.svg"
import "./Showcase.css"
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import MultiRangeSlider from "multi-range-slider-react";

function Showcase({products, BuyButton, title, useLinkOnItem, link, flexWrap, underLine, linkTo, oldPrice, filterOn}) {

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);

  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const isSmallScreen = useMediaQuery({ query: '(max-width: 700px)' })
  const isLittleScreen = useMediaQuery({ query: '(max-width: 1000px)' })

  var itemWidth = 95 / products.length;
  if (useLinkOnItem && isSmallScreen) {
    itemWidth = 100;
  }

  if (flexWrap && isLittleScreen) {
    itemWidth = 45;
  }

  const navigate = useNavigate();

    const toCompositions = () => {
        if (useLinkOnItem) {
          navigate("/catalog?category=compositions");
        }
    }

  return (
    <div className="offers__showcase showcase">
        {underLine && <Link to={link} className="showcase__header"><p className="showcase__heading">{title}</p><span className="showcase__underline"></span><span className="showcase__watch-more">Посмотреть все<ArrowRight className='showcase__icon'></ArrowRight></span></Link>}
        {filterOn && 
          <div className='showcase__filters filters'>
            <div>
            <h3 className="filters__heading">Цена</h3>
            <MultiRangeSlider
              min={220}
              max={9180}
              step={100}
              minValue={220}
              maxValue={9180}
              onInput={(e) => {
                handleInput(e);
              }}
            />
            </div>
            <div>
            <div className="filters__select">
              <label className="filters__heading--select">Цвет<input type="checkbox" /></label>
              <ul className="filters__list">
                <li className="filters__item">белые</li>
                <li className="filters__item">малиновые</li>
                <li className="filters__item">бордовые</li>
                <li className="filters__item">голубые</li>
                <li className="filters__item">желтые</li>
                <li className="filters__item">красные</li>
                <li className="filters__item">кремовые</li>
                <li className="filters__item">оранжевые</li>
                <li className="filters__item">разноцветные</li>
                <li className="filters__item">розовые</li>
                <li className="filters__item">сиреневые</li>
                <li className="filters__item">зеленые</li>
              </ul>
            </div>
            <div className="filters__select">
              <label className="filters__heading--select">Состав<input type="checkbox" /></label>
              <ul className="filters__list">
                <li className="filters__item">альстромерии</li>
                <li className="filters__item">анемоны</li>
                <li className="filters__item">гвоздики</li>
                <li className="filters__item">гиацинты</li>
                <li className="filters__item">гипсофила</li>
                <li className="filters__item">гортензия</li>
                <li className="filters__item">ирисы</li>
                <li className="filters__item">маттиола</li>
                <li className="filters__item">кустовыерозы</li>
                <li className="filters__item">пионовыерозы</li>
                <li className="filters__item">пионы</li>
                <li className="filters__item">ранункулюс</li>
                <li className="filters__item">розы</li>
                <li className="filters__item">ромашки</li>
                <li className="filters__item">тюльпаны</li>
                <li className="filters__item">хризантемы</li>
                <li className="filters__item">эустомы</li>
              </ul>
            </div>
            </div>
          </div>
        }
        <ul className={"showcase__list" + (useLinkOnItem ? ' showcase__list--column' : "") + (flexWrap ? ' showcase__list--wrap' : "")}>
            {products.map(product => 
                <li onClick={(e) => toCompositions()} key={product.id} className="showcase__item product" style={{width: itemWidth + "%"}}>
                    {useLinkOnItem && <Arrow45 className='product__icon'></Arrow45>}
                    <div className="product__image"><div className="prdocut__gradient"></div><img src={product.src} alt="" /></div>
                    <h3 className="product__heading">{product.heading}</h3>
                    {BuyButton && <Button onLink={product.linkOn} linkTo={linkTo} link={true} text={"Купить"} fz={"1"} padding={"25"}></Button>}
                    {product.price && <p className="product__price">От <span className="product__price--cross-out">{oldPrice ? product.oldPrice : ''}</span> { product.price + "р."}</p>}
                </li>
            )}
        </ul>
    </div>
  )
}

export default Showcase
