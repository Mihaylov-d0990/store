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
                                <div className="register__field">
                                    <span>Name</span>
                                    <input className="register__name" type="text" />
                                </div>
                                <div className="register__field">
                                    <span>Surname</span>
                                    <input className="register__surname" type="text" />
                                </div>
                                <div className="register__field">
                                    <span>Email</span>
                                    <input className="register__email" type="text" />         
                                </div>
                                <div className="register__field">
                                    <span>Password</span>
                                    <input className="register__password" type="text" />
                                </div>
                                <div className="register__field">
                                    <span>Repeat password</span>
                                    <input className="register__repeat-password" type="text" />
                                </div>
                                <div className="register__field">
                                    <div className="register__login">
                                        <Link href="/login">Log in</Link>
                                    </div>   
                                </div>
                                <div className="register__field">
                                    <input className="register__register" type="submit" value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}