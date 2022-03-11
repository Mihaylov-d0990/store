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

    return (
        <div className="list">
            {list.map(item => {
                return (
                    <div className="list__item" key={item.id}>
                        <div className="list__image">
                            <Link href="/" >
                                <Image src={item.itemImage} layout="responsive" width="100%" height="100%" />
                            </Link>
                        </div>
                        <div className="list__item-bottom">
                            <div className="list__info">
                                <div className="list__text">{item.name}</div>
                                <div className="list__price">Price: {item.price}$ US</div>
                            </div>
                            <div className="list__cart">
                                <div>
                                    <Image src="/images/cart.svg"  width="24px" height="24px" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}  
        </div>
    )
}