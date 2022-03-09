import image from "../images/image.jpg"

import React from "react"
import { Link } from "react-router-dom"

export default function Cart() {

    const cartItems = React.useState(() => {
        let arr = []
        for (let i = 0; i < 4; i++) {
            arr[i] = {
                id: i,
                name: "Obi belt",
                price: "19",
                itemImage: image,
                imageAlt: `image${i}`,
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum."
            }
        }

        return arr
    })[0]

    return (
        <div className="cart">
                <div className="container">
                    <div className="cart__content">
                        <div className="cart__list">
                            {
                                cartItems.map(item => {
                                    return (
                                        <div className="cart__item" key={item.id}>
                                            <Link to="/product" className="cart__image">
                                                <img src={item.itemImage} alt={item.imageAlt} />
                                            </Link>
                                            <div className="cart__info">
                                                <div className="cart__title">{item.name}</div>
                                                <div className="cart__price">Price: <span>{item.price}$ US</span></div>
                                                <div className="cart__text">{item.description}</div>
                                                <div className="cart__button button">Remove from cart</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }    
                        
                        </div>
                        <div className="cart__purchase">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}