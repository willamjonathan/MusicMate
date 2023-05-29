import '../styles/Home.css'
import '../styles/Link.css'
import BigHeader from './BigHeader';
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import Singer from '../img/Singer.jpeg'

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
                <div class ="berita-title">
                                <div class ="berita-title-a">MUSICMATE-</div><div class ="berita-title-b">  NEWS</div>
                            </div>
                        <div class ="berita-container">
                            
                            <div class ="berita-isi">
                                <div class ="title-berita-isi">
                                    THE SONG: "I Wish I Was 16" by Baskara Putra hits top trending!
                                </div>
                                 <div class ="berita-detail">
                                    <ul>
                               <    li>Title: I Wish I Was 16</li>
                               <li>Creator: Baskara Putra</li>
                                    <li>Genre: Indie</li>
                                    <li> Storyline  :</li>
                                </ul>
                                </div>   
                                <div class ="berita-storyline">
                                    <div class="pict-storyline singer-storyline "></div>
                                    <p class="p-satu">"I Wish I Was 16" is an indie music creation by Alex, a teenager seeking solace and artistic expression during difficult times. The song delves into the challenges of life, particularly during adolescence. Through heartfelt lyrics and captivating indie melodies, Baskaraexplores themes of loneliness, societal pressures, and the weight of responsibility that burden young individuals. The song becomes a relatable anthem for those who have faced adversity in their youth, offering a sense of understanding and empowerment.</p>
                                    <p>The track resonates with listeners from various backgrounds, becoming a source of comfort and inspiration. It captures the raw emotions of Alex's personal journey and invites others to confront their own struggles. "I Wish I Was 16" acknowledges the hardships that come with growing up but also highlights the resilience and hope that can be found within. Alex's music serves as a means of catharsis, empowering listeners to find their voice and navigate the challenges of life with strength and determination.</p>
                                    <p>The creation of "I Wish I Was 16" becomes a transformative experience for Baskaraas an artist. Their introspective lyrics and soulful vocals create a connection with the audience, providing a sense of belonging and understanding. The song acts as a reminder that music has the power to heal and uplift, inspiring individuals to confront their hardships and find solace in shared experiences. Through their indie sound and thought-provoking lyrics, Baskaraleaves a lasting impact on the hearts of listeners, becoming a beacon of hope for anyone facing the difficulties of youth.</p>
                                </div>
                            </div>

                        </div>
                        

                </div>
                <div class="whitespace"></div>
                {/* <h1>Section two</h1> */}
            </section>
            </div>
        </div>
    )

}

export default Home;