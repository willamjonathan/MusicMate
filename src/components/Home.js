import '../styles/Home.css'
import '../styles/Link.css'
import BigHeader from './BigHeader';
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const[search,setSearch]=useState("");
    
    return(
        <div>
            <div class = "Home">
           
            <section class="one-home">
                <LeftSelection></LeftSelection>
                <div class="right1-home">
                    <BigHeader></BigHeader>
                    <div class="container-home">
                        <div class="viral-home">
                            <div class ="viral-text">
                                    VIRAL
                                </div>
                                <div class ="viral-flex">
                                    <div class ="music-viral">
                                        <div class="picture-viral">

                                        </div>
                                        <div class="title-viral">
                                            Igor
                                        </div>
                                        <div class ="artist-viral">
                                            Tyler The Creator
                                        </div>
                                    </div>
                                    <div class ="music-viral">
                                        2
                                        <div class="picture-viral">
                                        </div>
                                        <div class="title-viral">
                                            Starboy
                                        </div>
                                        <div class ="artist-viral">
                                            The Weekend
                                        </div>    
                                    </div>
                                    <div class ="music-viral">3
                                    <div class="picture-viral">
                                        </div>
                                        <div class="title-viral">
                                            Party Day
                                        </div>
                                        <div class ="artist-viral">
                                            X
                                        </div>
                                    </div>
                                    <div class ="music-viral">4
                                    <div class="picture-viral">

                                    </div>
                                    <div class="title-viral">
                                        POWER
                                    </div>
                                    <div class ="artist-viral">
                                        Twice
                                    </div>
                                    
                                    </div>
                                </div>
                            <div class="underline-viral">
                                
                            </div>
                            </div>
                    </div>
                </div>
            </section>
            <section class = "two-home">
                <div class = "right2-home">
                        <div class ="forum-home">
                            FORUM

                        </div>
                </div>
                {/* <h1>Section two</h1> */}
            </section>
            </div>
        </div>
    )

}

export default Home;