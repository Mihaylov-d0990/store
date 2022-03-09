import image from "../images/image.jpg"

export default function Product() {

    return (
        <div class="product">
            <div class="container">
                <div class="product__content">
                    <div class="product__top">
                        <div class="product__grid">
                            <div class="product__image">
                                <img src={image} alt="" />
                            </div>
                            <div class="product__image">
                                <img src={image} alt="" />
                            </div>
                            <div class="product__image">
                                <img src={image} alt="" />
                            </div>
                            <div class="product__image">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div class="product__main-info">
                            <div class="product__title title">Obi belt</div>
                            <div class="product__price">Price: <span>19$ US</span></div>
                            <div class="product__color"><div></div>Black</div>
                            <div class="product__button button">Add to cart</div>
                        </div>
                    </div>
                    <div class="product__bottom">
                        <div class="product__secondary-info">
                            <div class="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                            <div class="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                            <div class="product__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ipsam incidunt, velit animi molestiae esse optio expedita, ea veniam eveniet quidem? Incidunt, quas unde distinctio expedita ad eos.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}