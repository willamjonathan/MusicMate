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
                                <div class="underline-viral">
                                <div class ="viral-flex">
                                    <div class ="music-viral ">
                                        <div class="picture-viral will">
                                            
                                        </div>
                                        <div class="title-viral">
                                            Do re mi 
                                        </div>
                                        <div class ="artist-viral">
                                            William
                                        </div>
                                    </div>
                                    <div class ="music-viral ">
                                        <div class="picture-viral andrean">
                                        </div>
                                        <div class="title-viral">
                                            satu dua tiga
                                        </div>
                                        <div class ="artist-viral">
                                            Andrean
                                        </div>    
                                    </div>
                                    <div class ="music-viral">
                                    <div class="picture-viral josh">
                                        </div>
                                        <div class="title-viral">
                                        4 sehat
                                        </div>
                                        <div class ="artist-viral">
                                            Joshua
                                        </div>
                                    </div>
                                    <div class ="music-viral">
                                    <div class="picture-viral sir">

                                    </div>
                                    <div class="title-viral">
                                        quiz dadakan
                                    </div>
                                    <div class ="artist-viral">
                                        Bagus
                                    </div>
                                    
                                    </div>
                                    {/* <div class ="music-viral">
                                    <div class="picture-viral sir">

                                    </div>
                                    <div class="title-viral">
                                        quiz dadakan
                                    </div>
                                    <div class ="artist-viral">
                                        Bagus
                                    </div>
                                    
                                    </div> */}
                                </div>
                            
                                
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