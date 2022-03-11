import Link from "next/link"

import DividingTitle from "../components/DividingTitle"
import Wrapper from "../components/Wrapper"

export default function Register() {

    return (
        <Wrapper>
            <DividingTitle text="Register" />
            <div className="register">
                <div className="container">
                    <div className="register__content">
                        <div className="register__form">
                            <form>
                                <span>Name</span><input className="register__name" type="text" />
                                <span>Surname</span><input className="register__surname" type="text" />
                                <span>Email</span><input className="register__email" type="text" />
                                <span>Password</span><input className="register__password" type="text" />
                                <span>Repeat password</span><input className="register__repeat-password" type="text" />
                                <Link href="/login" className="register__login">Log in</Link>
                                <input className="register__register" type="submit" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}