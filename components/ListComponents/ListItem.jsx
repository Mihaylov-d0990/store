import Link from "next/link"
import Image from "next/image"
import { useDispatch} from "react-redux"

import Quantity from "./Quantity"
import actions from "../../store/actions"
import checkLocalCart from "../../functions/checkLocalCart"

export default function ListItem({ item }) {

    const dispatch = useDispatch()

    // Add an item in the cart, in state and local storage

    const addToCart = (item) => {

        let addingItem = {}

        addingItem[item.id] = {
            name: item.name,
            price: item.price,
            image: item.itemImage,
            alt: item.imageAlt,
            quantity: item.quantity
        }

        if (!localStorage.cart) {   
            addingItem = {...addingItem}
            localStorage.cart = JSON.stringify(addingItem)

        } else {
            const cartObject = JSON.parse(localStorage.cart)
            if (cartObject[item.id]) {
                cartObject = Object.keys(cartObject).map(cartItem => {
                    if (Number(cartItem) === Number(item.id)) return {...cartObject[cartItem], quantity: cartObject[cartItem].quantity + item.quantity}
                    else return cartObject[cartItem]
                })

                cartObject = Object.assign({}, cartObject)
            } else {
                cartObject = {...cartObject, ...addingItem}
            }
            localStorage.cart = JSON.stringify(cartObject)
        }

        dispatch({
            type: actions.UPDATE_COUNT, 
            payload: checkLocalCart()
        })
    }

    return (
        <div className="list__item">
            <Link href={`/product/${item.id}`} passHref>
                <div className="list__image">   
                    <Image src={item.itemImage} layout="responsive" width="100%" height="100%" alt={item.imageAlt} />
                </div>
            </Link>
        
            <div className="list__item-bottom">
                <div className="list__info">
                    <div className="list__text">{item.name}</div>
                    <div className="list__price">Price: <span>{item.price}$ US</span></div>
                    <Quantity id={item.id} quantity={item.quantity} />
                </div>

                <div className="list__controller">
                    
                    <div className="list__cart">
                        <div className="list__cart-image" onClick={() => (addToCart(item))}>
                            <Image src="/images/cart.svg"  width="24px" height="24px" alt="cart icon" />
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}