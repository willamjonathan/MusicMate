import "../styles/Login.css";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Link.css'
import '../styles/Textfield.css'
import MMLogo from '../img/MM-Logo.png'
import LoginBG from '../img/Login-leftbg.png'

function Login() {
// const[username,setUsername]=useState("");
// const[password,setPassword]=useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isLoginMode) {
      // Make login request
      const loginData = { email, password };

      try {
        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.access_token);
          setErrorMessage("");
          setSuccessMessage("Login successful");

          // Add the access token to local storage
          localStorage.setItem("access_token", data.access_token);

          // TODO: Handle login success (e.g., redirect, store access token)
          // Example: Redirect to dashboard page
          // history.push("/dashboard");
          navigate(`/home`);
        } else {
          throw new Error("Incorrect email or password");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Incorrect email or password");
        setSuccessMessage("");
      }
    } else {
      // Make signup request
      const signupData = { email, password };

      try {
        const response = await fetch("http://localhost:8000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signupData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.message);
          setErrorMessage("");
          setSuccessMessage("User signup successful");

          // TODO: Handle signup success (e.g., display success message, redirect)
          // Example: Display success message
          // setSuccessMessage(data.message);
        } else {
          throw new Error("Error occurred during signup");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Error occurred during signup");
        setSuccessMessage("");
      }
    }
};

    return(<div>
        <div class="Login">
        <div class="left">
        <div class = "mmlogo"
                style={{
                    backgroundImage: `url(${MMLogo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '25%',
                    width:'25%'
                  }}
                ></div> 
            
            <div class="Title">
                
                <div class = "MUSIC-MATE">MUSICMATE</div>
                <div class="Rectangle-84"> . </div>
                <div class = "Moto">
                Where Music Comes Alive
                </div>
            </div> 
            <div class="login-bg-img"
            style={{
                backgroundImage: `url(${LoginBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '70%',
                width:'100%'
              }}
            >
                
            </div>
        </div>

        <div class = "right">

            {/* <div class = "user-info">
                <form>
                <div class="username">
                    USERNAME
                </div>
                <div class="text-field1">
                    <input
                    type = "text"
                    className="username-textfield1-login textfield"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    placeholder="Username"
                    />
                </div>
                <div class="password">
                    PASSWORD
                </div>
                <div class ="text-field2">
                <input
                    type="text"
                    className="password-textfield2-login textfield"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                </div>
                <div class = "LogIn">
                    <div class ='button1'>
                        <button type ='submit' className = 'btn'>LOGIN</button>

                    </div>
                    <div class ='create-an-account'>
                        <Link to ="/signup" className="link link-login">Create an account</Link>
                    </div>
                </div>
                </form>
                
            </div> */}
                <div class ="user-info">
                <h2>{isLoginMode ? "LOGIN" : "SIGN UP"}</h2>
                
                <form onSubmit={handleFormSubmit}>
                    <div>
                    <div class="username">
                    Email:</div>
                    <input
                    className="username-textfield1-login textfield"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div>
                    <div class="password">Password:</div>
                    <input
                    className="password-textfield2-login textfield"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div class ="error-message-login">
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                </div>
                
                {/* <p>
                    {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setIsLoginMode(!isLoginMode)}>
                    {isLoginMode ? "Sign Up" : "Login"}
                    </span>
                </p> */}
                <div class = "LogIn">
                    <div class ='button1'>
                        <button type ='submit' className = 'btn'>{isLoginMode ? "Login" : "Sign Up"}</button>

                    </div>
                    <div class ='create-an-account'>
                      <div class = "link-login">
                    {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                    <span onClick={() => setIsLoginMode(!isLoginMode)}>
                    {isLoginMode ? "Sign Up" : "Login"}
                    </span>
                    </div>
                        {/* <Link to ="/signup" className="link link-login">Create an account</Link> */}
                    </div>
                </div>
                </form>
                </div>
        </div>
        </div>
        
    </div>)
}

export default Login;
