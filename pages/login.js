import Link from "next/link"

import DividingTitle from "../components/DividingTitle"
import Head from "../components/Head"
import Foot from "../components/Foot"

export default function Login() {

    return (
        <>
            <Head />
            <DividingTitle text="Login" />
            <div className="login">
                <div className="container">
                    <div className="login__content">
                        <div className="login__form">
                            <form>
                                <div className="login__input">
                                    <span>Email</span>
                                    <input type="text" />
                                </div>
                                <div className="login__input">
                                    <span>Password</span>
                                    <input type="text" />
                                </div>
                                <label><input type="checkbox" /><span>Keep me Signed in</span></label>
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                        <div className="login__forget">
                            <Link href="/login">Forget password?</Link>
                        </div>
                        <div className="login__forget">
                            <Link href="/register">Register</Link>
                        </div>
                        <div className="login__dividing">

                        </div>
                        <div className="login__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, iure. Accusamus nam delectus repudiandae maxime, officia quae iste? Sunt iusto voluptatem nemo dolore odio minus libero rerum maxime pariatur ad.
                        </div>
                    </div>
                </div>
            </div>
            <Foot />
        </>
    )
}