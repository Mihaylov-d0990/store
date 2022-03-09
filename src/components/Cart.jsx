import image from "../images/image.jpg"

export default function Cart() {

    return (
        <div className="cart">
                <div className="container">
                    <div className="cart__content">
                        <div className="cart__list">
                            <div className="cart__item">
                                <a href="product.html" className="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div className="cart__info">
                                    <div className="cart__title">Obi belt</div>
                                    <div className="cart__price">Price: <span>19$ US</span></div>
                                    <div className="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div className="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div className="cart__item">
                                <a href="product.html" className="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div className="cart__info">
                                    <div className="cart__title">Obi belt</div>
                                    <div className="cart__price">Price: <span>19$ US</span></div>
                                    <div className="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div className="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div className="cart__item">
                                <a href="product.html" className="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div className="cart__info">
                                    <div className="cart__title">Obi belt</div>
                                    <div className="cart__price">Price: <span>19$ US</span></div>
                                    <div className="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div className="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                            <div className="cart__item">
                                <a href="product.html" className="cart__image">
                                    <img src={image} alt="" /> 
                                </a>
                                <div className="cart__info">
                                    <div className="cart__title">Obi belt</div>
                                    <div className="cart__price">Price: <span>19$ US</span></div>
                                    <div className="cart__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci tempora nesciunt eos sint dolores quaerat dolorem quibusdam magni nulla illum.</div>
                                    <div className="cart__button button">Remove from cart</div>
                                </div>
                            </div>
                        </div>
                        <div className="cart__purchase">
                            <div className="button">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}