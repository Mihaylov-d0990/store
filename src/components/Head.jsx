import profile from "../images/profile.svg"
import cart from "../images/cart.svg"

import { Link } from "react-router-dom"

export default function Head() {

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
                            <Link to="/catalog">
                                <div className="head__link">
                                    Catalog
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="head__link">
                                    Lorem.
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="head__link">
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