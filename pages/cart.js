import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

import DividingTitle from "../components/DividingTitle"
import Wrapper from "../components/Wrapper"
import actions from "../store/actions"
import checkLocalCart from "../functions/checkLocalCart"

export default function Cart() {

    const cartItems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const [rerender, setRerender] = React.useState(false) 

    // Upload data from local storage to state

    React.useEffect(() => {
        if (localStorage.cart) {
            let cart = JSON.parse(localStorage.cart)
            dispatch({type: actions.UPDATE_CART, payload: cart})
        }
        
    }, [rerender])

    // Remove item from cart. Update data in local storage and then update state.

    const removeProduct = (id) => {
        let cart = JSON.parse(localStorage.cart)

        for(let key in cart) {
            if (key === id) {
                delete cart[key]
                break
            }
        }

        localStorage.cart = JSON.stringify(cart)
        
        dispatch({
            type: actions.UPDATE_COUNT, 
            payload: checkLocalCart()
        })
        setRerender(!rerender)
    }

    // Bottom component. It shows purchase button or mesage.

    const Bottom = ({length}) => {
        if (length === 0) {
            return (
                <div className="cart__message">
                    <div className="cart__message-text">
                        At the moment, the basket is empty.<br/>Add some product.
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart__purchase">
                    <div className="button">Purchase</div>
                </div>
            )
        }
    } 

    // Closure

    const updateCart = operation => {

        if (operation) {
            return id => {
                let newList = {}

                newList = Object.keys(cartItems).map(item => {
                    if (item === id) {
                        return {...cartItems[item], quantity: cartItems[item].quantity + 1}
                    } else {
                        return cartItems[item]
                    }
                })

                localStorage.cart = JSON.stringify(Object.assign({}, newList))  
                dispatch({type: actions.UPDATE_CART, payload: newList})
            }
        } else {
            return id => {
                let newList = {}

                newList = Object.keys(cartItems).map(item => {
                    if (item === id && cartItems[item].quantity > 1) {
                        return {...cartItems[item], quantity: cartItems[item].quantity - 1}
                    } else {
                        return cartItems[item]
                    }
                })

                localStorage.cart = JSON.stringify(Object.assign({}, newList))  
                dispatch({type: actions.UPDATE_CART, payload: newList})
            }
        }
        
    }

    // Increase quantity of item in state and local storage

    const addThing = updateCart(true)

    // Decrease quantity of item in state and local storage

    const removeThing = updateCart(false)


    return (
        <Wrapper>
            <DividingTitle text="Cart" />
            <div className="cart">
                <div className="container">
                    <div className="cart__content">
                        <div className="cart__list">
                            {
                                Object.keys(cartItems).map(item => {
                                    return (
                                        <div className="cart__item" key={item}>
                                            <Link href="/product" passHref>
                                                <div className="cart__image">
                                                    <Image src={cartItems[item].image} alt={cartItems[item].alt} layout="responsive" width="100%" height="100%" />
                                                </div>
                                            </Link>
                                            <div className="cart__info">
                                                <div className="cart__title">{cartItems[item].name}</div>
                                                <div className="cart__price">Price: <span>{cartItems[item].price}$ US</span></div>
                                                <div className="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                                <div className="cart__controller">
                                                    <div className="cart__quantity quantity">
                                                        <button onClick={() => (addThing(item))} className="quantity__button">+</button>
                                                        <div className="quantity__value">{cartItems[item].quantity}</div>
                                                        <button onClick={() => (removeThing(item))} className="quantity__button">-</button>
                                                    </div>
                                                    <div className="cart__button button" onClick={() => {removeProduct(item)}}>Remove from cart</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }     
                        </div>
                        <Bottom length={Object.keys(cartItems).length}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}