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
        <div className="catalog">
            <div className="container">
                <div className="catalog__content">
                    <div className="catalog__title title">Catalog</div>
                        <div className="catalog__list">
                            {favourites.map(fav => {
                                return (
                                    <div className="catalog__item" key={fav.id}>
                                        <Link to="/product" className="catalog__image">
                                            <img src={fav.image} alt="" />
                                        </Link>
                                        <div className="catalog__item-bottom">
                                            <div className="catalog__info">
                                                <div className="catalog__text">{fav.name}</div>
                                                <div className="catalog__price">{fav.price}</div>
                                            </div>
                                            <div className="catalog__cart">
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