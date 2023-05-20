import "../styles/Signup.css"
import React, { useEffect, useState } from "react";
import '../styles/Link.css'
import '../styles/Textfield.css'
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from '../img/SignUpImage.jpg';



function Signup() {
    const[fullname,setFullname]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[reenter,setReenter]=useState("");
    return(<div>
        <div class="SignUp">
            <div class ="left-signup"
            style={{
                backgroundImage: `url(${SignUpImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '100vh',
              }}>

            </div>
            <div class = "right-signup">

            <div class="Title-signup">
                <div class = "MUSIC-MATE-signup">MUSICMATE</div>
                <div class="Rectangle-84-signup"> .</div>
                <div class = "Moto-signup">
                Where Music Comes Alive
                </div>
            </div> 
            <div class = "user-info-signup">
                <div class="subtext">
                    Full-name
                </div>
                    <input
                    type="text"
                    className="fullname-txt textfield"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Full-name"
                    />

                <div class="subtext">
                    Username
                </div>
                <input
                    type="text"
                    className="username-txt textfield "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    />
                <div class="subtext">
                    Email
                </div>
                <input
                    type="text"
                    className="email-txt textfield"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    />
                <div class="subtext">
                    Password
                </div>
                <input
                    type="text"
                    className="password-txt textfield"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                <div class="subtext">
                    Re-enter Password
                </div>
                <input
                    type="text"
                    className="re-enter-txt textfield"
                    value={reenter}
                    onChange={(e) => setReenter(e.target.value)}
                    placeholder="Re-enter password"
                    />
                <div class = "SIGN-UP">
                    SIGN UP
                </div>
                <div class ='login-now'>
                Already have an account? <Link to="/login" className="link">Login</Link> now.
                </div>
                {/* <div class="free-space">
                    
                </div> */}
            </div>


            </div>


        </div>

    </div>
    
    )
}

export default Signup;