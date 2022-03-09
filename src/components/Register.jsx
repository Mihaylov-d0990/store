export default function Register() {

    return (
        <div class="register">
            <div class="container">
                <div class="register__content">
                    <div class="register__form">
                        <form>
                            <span>Name</span><input class="register__name" type="text" />
                            <span>Surname</span><input class="register__surname" type="text" />
                            <span>Email</span><input class="register__email" type="text" />
                            <span>Password</span><input class="register__password" type="text" />
                            <span>Repeat password</span><input class="register__repeat-password" type="text" />
                            <a href="login.html" class="register__login">Log in</a>
                            <input class="register__register" type="submit" value="Register" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}