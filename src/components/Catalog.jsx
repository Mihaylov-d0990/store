import React from "react"

import { Link } from "react-router-dom"

import cart from "../images/cart.svg"
import image from "../images/image.jpg"

export default function Catalog() {
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
        <div class="catalog">
            <div class="container">
                <div class="catalog__content">
                    <div class="catalog__title title">Catalog</div>
                        <div class="catalog__list">
                            {favourites.map(fav => {
                                return (
                                    <div class="catalog__item" key={fav.id}>
                                        <Link to="/product" class="catalog__image">
                                            <img src={fav.image} alt="" />
                                        </Link>
                                        <div class="catalog__item-bottom">
                                            <div class="catalog__info">
                                                <div class="catalog__text">{fav.name}</div>
                                                <div class="catalog__price">{fav.price}</div>
                                            </div>
                                            <div class="catalog__cart">
                                                <img src={cart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}  
                        </div>
                </div>
            </div>
        </div>
    )
}