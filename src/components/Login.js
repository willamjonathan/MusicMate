import "../styles/Login.css";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Link.css'
import '../styles/Textfield.css'

function Login() {
const[username,setUsername]=useState("");
const[password,setPassword]=useState("");

    return(<div>
        <div class="Login">
        <div class="left">
            <div class="Title">
                <div class = "MUSIC-MATE">MUSICMATE</div>
                <div class="Rectangle-84"> . </div>
                <div class = "Moto">
                Where Music Comes Alive
                </div>
            </div> 
        </div>
        <div class = "right">
            <div class = "user-info">
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
                        LOG IN
                    </div>
                    <div class ='create-an-account'>
                        <Link to ="/signup" className="link">Create an account</Link>
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        
    </div>)
}

export default Login;