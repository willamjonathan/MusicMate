import "../styles/Signup.css"
import React, { useEffect, useState } from "react";
import '../styles/Link.css'


function Signup() {
    const[fullname,setFullname]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[reenter,setReenter]=useState("");
    return(<div>
        <div class="SignUp">
            <div class ="left-signup">

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
                <div class="fullname-signup">
                    Full-name
                </div>
                <div class="text-field1-signup">
                    <input
                    type="text"
                    className="fullname-txt textfield"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    placeholder="Full-name"
                    />
                </div>
                <div class="username-signup">
                    Username
                </div>
                <div class ="text-field2-signup">
                <input
                    type="text"
                    className="username-txt textfield "
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    />
                </div>
                <div class="email-signup">
                    Email
                </div>
                <div class="text-field3-signup">
                <input
                    type="text"
                    className="email-txt textfield"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    />
                </div>
                <div class="password-signup">
                    Password
                </div>
                <div class ="text-field4-signup">
                <input
                    type="text"
                    className="password-txt textfield"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    />
                </div>
                <div class="re-enter-password-signup">
                    Re-enter Password
                </div>
                <div class ="text-field5-signup">
                <input
                    type="text"
                    className="re-enter-txt textfield"
                    value={reenter}
                    onChange={(e) => setReenter(e.target.value)}
                    placeholder="Re-enter password"
                    />
                </div>
                
                <div class = "SIGN-UP">
                    SIGN UP
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