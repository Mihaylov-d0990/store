export default function Register() {

    return (
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
                            <a href="login.html" className="register__login">Log in</a>
                            <input className="register__register" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}