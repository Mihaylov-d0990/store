import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"

import DividingTitle from "../components/DividingTitle"
import Wrapper from "../components/Wrapper"
import actions from "../store/actions"

export default function Cart() {

    const [cartItems, setCartItems] = React.useState([])
    const [rerender, setRerender] = React.useState(false) 

    const cartToArray = (cart) => {

        let newCartItems = []
        for (let key in cart) {

            if (Number(key).toString() === "NaN") {
                localStorage.cart = JSON.stringify({})
                return []
            }

            cart[key].id = key
            cart[key].description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum."
            newCartItems.push({...cart[key]})
        }
        
        return [...newCartItems]
    }

    React.useEffect(() => {
        let cart = JSON.parse(localStorage.cart)
        setCartItems(cartToArray(cart))
    }, [rerender])

    const dispatch = useDispatch()

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
            payload: Object.keys(JSON.parse(localStorage.cart)).length
        })
        setRerender(!rerender)
    }

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

    return (
        <Wrapper>
            <DividingTitle text="Cart" />
            <div className="cart">
                <div className="container">
                    <div className="cart__content">
                        <div className="cart__list">
                            {
                                cartItems.map(item => { 
                                    return (
                                        <div className="cart__item" key={item.id}>
                                            <Link href="/product" passHref>
                                                <div className="cart__image">
                                                    <Image src={item.image} alt={item.alt} layout="responsive" width="100%" height="100%" />
                                                </div>
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
        </Wrapper>
    )
}