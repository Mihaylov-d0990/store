import image from "../images/image.jpg"

import React from "react"
import { Link } from "react-router-dom"
import DividingTitle from "./DividingTitle"

export default function Cart() {

    const [cartItems, setCartItems] = React.useState(() => {
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
    })

    const removeProduct = (id) => {
        let arr = [...cartItems]
        let arrId = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === id) arrId = i
        }

        arr.splice(arrId, 1)
        setCartItems([...arr])
    }

    const Bottom = ({length}) => {
        if (length === 0) {
            return <h1>Cart is empty</h1>
        } else {
            return (
                <div className="cart__purchase">
                    <div className="button">Purchase</div>
                </div>
            )
        }
    } 

    return (
        <>
            <DividingTitle text="Cart" />
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
                                                <div className="cart__button button" onClick={() => {removeProduct(item.id)}}>Remove from cart</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }     
                        </div>
                        <Bottom length={cartItems.length}/>
                    </div>
                </div>
            </div>
        </>
    )
}