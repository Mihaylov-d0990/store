import React from "react"
import { Link } from "react-router-dom"

import cart from "../images/cart.svg"
import image from "../images/image.jpg"

export default function List() {

    

    const list = React.useState(() => {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr[i] = {
                id: i,
                name: "Obi belt",
                price: "19",
                itemImage: image,
                imageAlt: `Obi belt${i}`
            }
        }

        return arr
    })[0]

    return (
        <div className="list">
            {list.map(item => {
                return (
                    <div className="list__item" key={item.id}>
                        <Link to="/product" className="list__image">
                            <img src={item.itemImage} alt={item.imageAlt} />
                        </Link>
                        <div className="list__item-bottom">
                            <div className="list__info">
                                <div className="list__text">{item.name}</div>
                                <div className="list__price">Price: {item.price}$ US</div>
                            </div>
                            <div className="list__cart">
                                <img src={cart} alt="cart icon" />
                            </div>
                        </div>
                    </div>
                )
            })}  
        </div>
    )
}