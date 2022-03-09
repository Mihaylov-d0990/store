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
            <div className="dividing"></div>
            <div className="favourites">
                <div className="container">
                    <div className="favourites__content">
                        {favourites.map(fav => {
                            return (
                                <div className="favourites__item" key={fav.id}>
                                    <Link to="/product" className="favourites__image">
                                        <img src={fav.image} alt="" />
                                    </Link>
                                    <div className="favourites__item-bottom">
                                        <div className="favourites__info">
                                            <div className="favourites__text">{fav.name}</div>
                                            <div className="favourites__price">{fav.price}</div>
                                        </div>
                                        <div className="favourites__cart">
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