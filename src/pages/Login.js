import React from 'react'

const Login = () => {
    return (
        <div>
        <section class="login-form">
        <h1>LOGIN DESIGN</h1>
        <form action="">
            <div class="int-area">
                <input type="text" name="id" id="id" autocomplete="off" required/>
                <label for="id">USER ID</label>
            </div>
            <div class="int-area">
                <input type="password" name="pw" id="pw" autocomplete="off" required/>
                <label for="pw">PASSWORD</label>
            </div>
            <div class="btn-area">
                <button id="btn" type="submit">LOGIN</button>
            </div>
        </form>
        <div class="caption">
            <a href="3_MakePassword.html">Forgot Password?</a>
        </div>
    </section>
    <script src="1.js"></script>
    </div>
    )
}

export default Login