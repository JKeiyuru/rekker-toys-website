import React from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                   <input type="text" placeholder='Your Name' name='Name'/> 
                   <input type="email" placeholder='E-mail Address' name='e-mail' />
                   <input type="password" placeholder='Password' name='password' />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Alreasy have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing I agree to the terms of use and policies</p>

                </div>
            </div>

        </div>
    );
}

export default LoginSignup;