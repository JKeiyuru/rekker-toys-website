import React, { useState } from 'react';
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    const [state,setstate] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
        
    }

    const login = async ()=>{
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('https://rekker-toys-website-backend.onrender.com/login',{
            method:'POST',
            headers:{
                Accept:'applcation/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
        
    }
    const signup = async ()=>{
        console.log("Sign Up Function Executed",formData);
        let responseData;
        await fetch('https://rekker-toys-website-backend.onrender.com/signup',{
            method:'POST',
            headers:{
                Accept:'applcation/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=>responseData=data)
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        }
        else{
            alert(responseData)
        }
    }



    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                  {state === "Sign Up"? <input type="text" placeholder='Your Name' name='username' value={formData.username} onChange={changeHandler}/>:<></> }
                   <input type="email" placeholder='E-mail Address' name='email' value={formData.email} onChange={changeHandler}/>
                   <input type="password" placeholder='Password' name='password' value={formData.password} onChange={changeHandler} />
                </div>
                <button onClick={()=>{state === "Login"?login():signup()}} >Continue</button>
                {state === "Sign Up"?<p className="loginsignup-login">Alreasy have an account? <span onClick={()=>{setstate("Login")}} >Login here</span></p>
                                     :<p className="loginsignup-login">Create an account? <span onClick={()=>{setstate("Sign Up")}}>Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing I agree to the terms of use and policies</p>

                </div>
            </div>

        </div>
    );
}

export default LoginSignup;