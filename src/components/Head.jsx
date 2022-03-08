import profile from "../images/profile.svg"
import cart from "../images/cart.svg"

export default function Head() {

    return (
        <div class="head dividing">
            <div class="container">
                <div class="head__content">
                    <div class="head__top">
                        <div class="head__logo">
                            <a href="/store-layout.github.io/">
                                Store-layout
                            </a>
                        </div>
                        <div class="head__search">
                            <input type="text" />
                            <button>Search</button>
                        </div>
                        <div class="head__profile">
                            <a href="login.html">
                                <div class="head__login">
                                    <img src={profile} alt="" />
                                </div>
                            </a>
                            <a href="cart.html">
                                <div class="head__basket">
                                    <img src={cart} alt="" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="head__nav">
                        <nav>
                            <a href="catalog.html">
                                <div class="head__link">
                                    Catalog
                                </div>
                            </a>
                            <a href="/store-layout.github.io/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </a>
                            <a href="/store-layout.github.io/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </a>
                            <a href="/store-layout.github.io/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </a>
                            <a href="/store-layout.github.io/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </a>
                            <a href="/store-layout.github.io/">
                                <div class="head__link">
                                    Lorem.
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}