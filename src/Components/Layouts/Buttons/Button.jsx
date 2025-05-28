import React from 'react'
import "./Button.css"
import { useNavigate } from 'react-router-dom'

function Button({text, fz, padding, instedColor, addToCart, link, linkTo, onLink, plusMines}) {

  const navigate = useNavigate()

  const toLink = () => {
    if (addToCart) {
      plusMines();
      let products = localStorage.getItem("cartProducts");
      let productsCount = localStorage.getItem("cartCount");
      let productsCountMas = localStorage.getItem("cartCount").split("&");
      if (!products.includes((addToCart))) {
        products += addToCart;
        productsCount += "1&";
        localStorage.setItem("cartProducts", products);
        localStorage.setItem("cartCount", productsCount);
      } else {
        let productsMas = products.split("&");
        var countTemp = productsMas.indexOf(addToCart.slice(0, -1));
        productsCountMas[countTemp] = Number(productsCountMas[countTemp]) + 1 + "";
        productsCount = productsCountMas.join("&");
        localStorage.setItem("cartCount", productsCount);
      }

    } else if (link) {
      if (linkTo == "bouquet") {
        navigate("/product?title=bouquet" + "&product=" + onLink);
      } else if (linkTo == "composition") {
        navigate("/product?title=composition" + "&product=" + onLink);
      } else if (linkTo == "bouquets") {
        navigate("/catalog?category=bouquet");
      }
    }
  }

  return (
    <button onClick={(e) => toLink()} className={"button" + (instedColor ? " button--insted" : "")} type="button" style={{fontSize: fz + "em", paddingLeft: padding + "px", paddingRight: padding + "px"}}>
        {text}
    </button>
  )
}

export default Button
