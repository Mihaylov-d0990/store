import Intro from "./Intro"
import React from "react"

import { Link } from "react-router-dom"

import cart from "../images/cart.svg"
import image from "../images/image.jpg"

export default function Main() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = {
            id: i,
            name: "Obi belt",
            price: "19$ US",
            image: image
        }
    }

    const [favourites, setFavourites] = React.useState([...arr])

    return (
        <>
            <Intro />
            <div class="dividing"></div>
            <div class="favourites">
                <div class="container">
                    <div class="favourites__content">
                        {favourites.map(fav => {
                            return (
                                <div class="favourites__item" key={fav.id}>
                                    <Link to="/product" class="favourites__image">
                                        <img src={fav.image} alt="" />
                                    </Link>
                                    <div class="favourites__item-bottom">
                                        <div class="favourites__info">
                                            <div class="favourites__text">{fav.name}</div>
                                            <div class="favourites__price">{fav.price}</div>
                                        </div>
                                        <div class="favourites__cart">
                                            <img src={cart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}  
                    </div>
                </div>
            </div>
        </>
    )
}