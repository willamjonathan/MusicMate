import "../styles/Login.css";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Link.css'
import '../styles/Textfield.css'
import MMLogo from '../img/MM-Logo.png'
import LoginBG from '../img/Login-leftbg.png'

function Login() {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");

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
            {/* <div class = "mmlogo"
                style={{
                    backgroundImage: `url(${MMLogo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '60%',
                    width:'70%'
                  }}
                >.</div> */}
            <div class = "user-info">
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
                        {/* <Link to ="/home" className= "link">LOGIN</Link> */}
                    </div>
                    <div class ='create-an-account'>
                        <Link to ="/signup" className="link link-login">Create an account</Link>
                    </div>
                </div>
                </form>
                
            </div>
        </div>
        </div>
        
    </div>)
}

export default Login;