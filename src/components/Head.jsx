import profile from "../images/profile.svg"
import cart from "../images/cart.svg"

import { Link } from "react-router-dom"
import React from "react"

export default function Head() {

    const navLinks = React.useState([
        {
            name: "Catalog",
            link: "/catalog"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
        {
            name: "Lorem",
            link: "/"
        },
    ])[0]

    return (
        <div className="head dividing">
            <div className="container">
                <div className="head__content">
                    <div className="head__top">
                        <div className="head__logo">
                            <Link to="/">
                                Store-layout
                            </Link>
                        </div>
                        <div className="head__search">
                            <input type="text" />
                            <button>Search</button>
                        </div>
                        <div className="head__profile">
                            <Link to="/login">
                                <div className="head__login">
                                    <img src={profile} alt="" />
                                </div>
                            </Link>
                            <Link to="/cart">
                                <div className="head__basket">
                                    <img src={cart} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="head__nav">
                        <nav>
                            {
                                navLinks.map(link => {
                                    return (
                                        <Link to={link.link} key={Math.random()}>
                                            <div className="head__link">{link.name}</div>
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}