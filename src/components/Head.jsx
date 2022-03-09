import profile from "../images/profile.svg"
import cart from "../images/cart.svg"

import { Link } from "react-router-dom"

export default function Head() {

    return (
        <div class="head dividing">
            <div class="container">
                <div class="head__content">
                    <div class="head__top">
                        <div class="head__logo">
                            <Link to="/">
                                Store-layout
                            </Link>
                        </div>
                        <div class="head__search">
                            <input type="text" />
                            <button>Search</button>
                        </div>
                        <div class="head__profile">
                            <Link to="/login">
                                <div class="head__login">
                                    <img src={profile} alt="" />
                                </div>
                            </Link>
                            <Link to="/cart">
                                <div class="head__basket">
                                    <img src={cart} alt="" />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="head__nav">
                        <nav>
                            <Link to="/catalog">
                                <div class="head__link">
                                    Catalog
                                </div>
                            </Link>
                            <Link to="/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}