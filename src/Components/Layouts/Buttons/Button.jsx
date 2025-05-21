import React from 'react'
import "./Button.css"
import { useNavigate } from 'react-router-dom'

function Button({text, fz, padding, instedColor, addToCart, link, linkTo}) {

  const navigate = useNavigate()

  const toLink = () => {
    if (addToCart) {
      if (addToCart == "bouquet") {
        var count = localStorage.getItem("cartCountBouquet");
        count++;
        localStorage.setItem("cartCountBouquet", count)
      } else {
        var count = localStorage.getItem("cartCountComposition");
        count++;
        localStorage.setItem("cartCountComposition", count)
      }
    } else if (link) {
      if (linkTo == "bouquet") {
        navigate("/product?title=bouquet");
      } else if (linkTo == "composition") {
        navigate("/product?title=composition");
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
