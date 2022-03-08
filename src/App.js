import './style.scss'

import cart from "./images/cart.svg"
import image from "./images/image.jpg"

import React from "react"
import Head from './components/Head'
import Main from './components/Main'
import Foot from './components/Foot'

function App() {
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
        <div class="wrapper">
            <Head />
            <Main />
            <div class="dividing"></div>
            <div class="favourites">
                <div class="container">
                    <div class="favourites__content">
                        {favourites.map(fav => {
                            return (
                                <div class="favourites__item" key={fav.id}>
                                    <a href="product.html" class="favourites__image">
                                        <img src={fav.image} alt="" />
                                    </a>
                                    <div class="favourites__item-bottom">
                                        <div class="favourites__info">
                                            <div class="favourites__text">{fav.name}</div>
                                            <div class="favourites__price">{fav.price}</div>
                                        </div>
                                        <div class="favourites__cart">
                                            <img src={cart} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}  
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
}

export default App;
