import image from "../images/image.jpg"

export default function Cart() {

    return (
        <div class="cart">
                <div class="container">
                    <div class="cart__content">
                        <div class="cart__list">
                            <div class="cart__item">
                                <a href="product.html" class="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div class="cart__info">
                                    <div class="cart__title">Obi belt</div>
                                    <div class="cart__price">Price: <span>19$ US</span></div>
                                    <div class="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div class="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div class="cart__item">
                                <a href="product.html" class="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div class="cart__info">
                                    <div class="cart__title">Obi belt</div>
                                    <div class="cart__price">Price: <span>19$ US</span></div>
                                    <div class="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div class="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div class="cart__item">
                                <a href="product.html" class="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div class="cart__info">
                                    <div class="cart__title">Obi belt</div>
                                    <div class="cart__price">Price: <span>19$ US</span></div>
                                    <div class="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div class="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div class="cart__item">
                                <a href="product.html" class="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div class="cart__info">
                                    <div class="cart__title">Obi belt</div>
                                    <div class="cart__price">Price: <span>19$ US</span></div>
                                    <div class="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div class="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                        </div>
                        <div class="cart__purchase">
                            <div class="button">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}