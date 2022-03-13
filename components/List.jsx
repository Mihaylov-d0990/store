import React from "react"

import Link from "next/link"
import Image from "next/image"

export default function List() {

    const list = React.useState(() => {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr[i] = {
                id: i,
                name: "Obi belt",
                price: "19",
                itemImage: "/images/image.jpg",
                imageAlt: `Obi belt${i}`
            }
        }

        return arr
    })[0]

    const addToCart = (item) => {
        if (typeof localStorage.cart === "undefined") {
            let obj = {}

            obj[item.id] = {
                name: item.name,
                price: item.price,
                image: item.itemImage,
                alt: item.imageAlt
            }
            obj = {...obj}

            localStorage.cart = JSON.stringify(obj)
        } else {
            const locS = JSON.parse(localStorage.cart)
            let obj = {}
            
            obj[item.id] = {
                name: item.name,
                price: item.price,
                image: item.itemImage,
                alt: item.imageAlt
            }

            locS = {...locS, ...obj}
            localStorage.cart = JSON.stringify(locS)
        }
        console.log(JSON.parse(localStorage.cart))
    }

    return (
        <div className="list">
            {list.map(item => {
                return (
                    <div className="list__item" key={item.id}>
                            <Link href="/product" passHref>
                                <div className="list__image">   
                                    <Image src={item.itemImage} layout="responsive" width="100%" height="100%" alt={item.imageAlt} />
                                </div>
                            </Link>
                        
                        <div className="list__item-bottom">
                            <div className="list__info">
                                <div className="list__text">{item.name}</div>
                                <div className="list__price">Price: <span>{item.price}$ US</span></div>
                            </div>
                            <div className="list__cart">
                                <div className="list__cart-image" onClick={() => (addToCart(item))}>
                                    <Image src="/images/cart.svg"  width="24px" height="24px" alt="cart icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}  
        </div>
    )
}