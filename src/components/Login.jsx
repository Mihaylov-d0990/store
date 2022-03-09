import { Link } from "react-router-dom"

export default function Login() {

    return (
        <div class="login">
            <div class="container">
                <div class="login__content">
                    <div class="login__email">Email</div>
                    <div class="login__form">
                        <form>
                            <input type="text" />
                            <label><input type="checkbox" /><span>Keep me Signed in</span></label>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                    <div class="login__forget">
                        <Link to="/login">Forget password?</Link>
                    </div>
                    <div class="login__forget">
                        <Link to="/register">Register</Link>
                    </div>
                    <div class="login__dividing">

                    </div>
                    <div class="login__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, iure. Accusamus nam delectus repudiandae maxime, officia quae iste? Sunt iusto voluptatem nemo dolore odio minus libero rerum maxime pariatur ad.
                    </div>
                </div>
            </div>
        </div>
    )
}