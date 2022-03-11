import React from "react"

import Image from "next/image"

import DividingTitle from "../components/DividingTitle"
import Head from "../components/Head"
import Foot from "../components/Foot"

export default function Product() {

    const images = React.useState(() => {
        let arr = []
        for (let i = 0; i < 4; i++) {
            arr[i] = {
                id: i,
                image: "/images/image.jpg",
                alt: `image${i}`
            }
        }

        return arr
    })[0]


    return (
        <>
            <Head />
            <DividingTitle text="Obi belt" />
            <div className="product">
                <div className="container">
                    <div className="product__content">
                        <div className="product__top">
                            <div className="product__grid">
                                {
                                    images.map(image => {
                                        return (
                                            <div className="product__image" key={image.id}>
                                                <Image src={image.image} alt={image.alt} layout="responsive" width="100%" height="100%"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="product__main-info">
                                <div className="product__price">Price: <span>19$ US</span></div>
                                <div className="product__color"><div></div>Black</div>
                                <div className="product__button button">Add to cart</div>
                            </div>
                        </div>
                        <div className="product__bottom">
                            <div className="product__secondary-info">
                                <div className="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                                <div className="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                                <div className="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    )
}