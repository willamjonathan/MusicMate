import '../styles/Home.css'
import '../styles/Link.css'
import BigHeader from './BigHeader';
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";



function Home(){
    const[search,setSearch]=useState("");
    const [content, setContent] = useState(0);
    const [viral, setViral] = useState(0);
// BERITA
const navigate = useNavigate();
    const handleUsernameClick =async (username) => {
        try {
        const url = `http://localhost:8000/ChooseNow?email=${encodeURIComponent(username)}`;
        const response = await fetch(url, {
            method: "POST",
            credentials: "include", // Include cookies in the request
            headers: {
            "Content-Type": "application/json",
            },
        });
    
        // Handle the response data
        const data = await response.json();
        console.log(data); // Assuming the response contains the songs data
    
        // Do any necessary UI updates based on the response data
        } catch (error) {
        // Handle any errors
        console.error(error);
        }
        navigate(`/user-post-page`);

    };
    const contents = [

      <div key ={1} class ="berita-isi">
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
            <div class="pict-storyline singer-storyline1 "></div>
            <p class="p-satu">"I Wish I Was 16" is an indie music creation by Alex, a teenager seeking solace and artistic expression during difficult times. The song delves into the challenges of life, particularly during adolescence. Through heartfelt lyrics and captivating indie melodies, Baskaraexplores themes of loneliness, societal pressures, and the weight of responsibility that burden young individuals. The song becomes a relatable anthem for those who have faced adversity in their youth, offering a sense of understanding and empowerment.</p>
            <p>The track resonates with listeners from various backgrounds, becoming a source of comfort and inspiration. It captures the raw emotions of Alex's personal journey and invites others to confront their own struggles. "I Wish I Was 16" acknowledges the hardships that come with growing up but also highlights the resilience and hope that can be found within. Alex's music serves as a means of catharsis, empowering listeners to find their voice and navigate the challenges of life with strength and determination.</p>
            <p>The creation of "I Wish I Was 16" becomes a transformative experience for Baskaraas an artist. Their introspective lyrics and soulful vocals create a connection with the audience, providing a sense of belonging and understanding. The song acts as a reminder that music has the power to heal and uplift, inspiring individuals to confront their hardships and find solace in shared experiences. Through their indie sound and thought-provoking lyrics, Baskaraleaves a lasting impact on the hearts of listeners, becoming a beacon of hope for anyone facing the difficulties of youth.</p>
        </div>
    </div>,
    <div key ={2} class ="berita-isi">
    <div class ="title-berita-isi">
        "My Everything" background story!
    </div>
        <div class ="berita-detail">
        <ul>
    <    li>Title: My Everything </li>
    <li>Creator: Alex Rosanti</li>
        <li>Genre: Rock</li>
        <li> Storyline  :</li>
    </ul>
    </div>   
    <div class ="berita-storyline">
        <div class="pict-storyline singer-storyline2 "></div>
        
        <p>In Harmonyville, musicians Alex and Lily meet and are inspired by each other's talent. Alex composes a song called "My Everything" after hearing Lily's captivating voice. They collaborate on the song, pouring their hearts into it, and exploring the depths of their emotions. Finally, they perform the song together, captivating the audience with its raw and heartfelt beauty.</p>

    </div>
</div>,
   <div key ={3} class ="berita-isi">
   <div class ="title-berita-isi">
       The origin of "The Sudden Quiz"
   </div>
       <div class ="berita-detail">
       <ul>
   <    li>Title: The Sudden Quiz</li>
   <li>Creator: Ilham </li>
       <li>Genre: Rock </li>
       <li> Storyline  :</li>
   </ul>
   </div>   
   <div class ="berita-storyline">
       <div class="pict-storyline singer-storyline3 "></div>
       <p>
        
        Max, a dedicated student, faces an unexpected and challenging quiz, resulting in a disappointing score. They feel sad and discouraged but refuse to let the setback define them. With the support of their loved ones, Max regains their self-belief and recognizes that setbacks are part of the learning journey. They channel their emotions into a creative outlet, finding solace and inspiration in their resilience.

       </p>
   </div>
</div>,
<div key ={4} class ="berita-isi">
    <div class ="title-berita-isi">
        The behind the scene of Ria's hits.
    </div>
        <div class ="berita-detail">
        <ul>
    <    li>Title: I Would Kill a Dragon If I Need To </li>
    <li>Creator: Ria Andriani</li>
        <li>Genre: Indie</li>
        <li> Storyline  :</li>
    </ul>
    </div>   
    <div class ="berita-storyline">
    <div class="pict-storyline singer-storyline4 "></div>
        <p>
        Inspired by a storybook that Ria's father used to read. 
        Max, a dedicated student, faces an unexpected and challenging quiz, resulting in a disappointing score. They feel sad and discouraged but refuse to let the setback define them. With the support of their loved ones, Max regains their self-belief and recognizes that setbacks are part of the learning journey. They channel their emotions into a creative outlet, finding solace and inspiration in their resilience.

        </p>
        
        </div>
</div>,
<div key ={5} class ="berita-isi">
    <div class ="title-berita-isi">
        Revenge by Anindia!
    </div>
        <div class ="berita-detail">
        <ul>
    <    li>Title: Revenge</li>
    <li>Creator: Anindia Saputri</li>
        <li>Genre: Pop</li>
        <li> Storyline  :</li>
    </ul>
    </div>   
    <div class ="berita-storyline">
        <div class="pict-storyline singer-storyline5 "></div>
       <p>
       Maya, a victim of relentless bullying, finds solace in music and creates a song called "Revenge" as an expression of their pain and desire for justice. Through personal growth and transformation, Maya becomes a symbol of resilience and empowerment. They confront their bullies with confidence, inspiring others to stand up against bullying. Maya's journey from victim to victor becomes a testament to the power of inner strength and self-love, proving that true revenge lies in rising above negativity and becoming the best version of oneself.

       </p>
       
       </div>
</div>
    ];
  
    const handleForwardClick = () => {
      setContent((prevContent) => (prevContent === contents.length - 1 ? 0 : prevContent + 1));
    };
  
    const handleBackwardClick = () => {
      setContent((prevContent) => (prevContent === 0 ? contents.length - 1 : prevContent - 1));
    };
// VIRAL
    const virals = [
        <div key={1} class ="viral-flex">
                                    <div class ="music-viral key1 ">
                                        <div class="picture-viral will">
                                            
                                        </div>
                                        <div class="title-viral">
                                            Do re mi 
                                        </div>
                                        <div class ="artist-viral">
                                            William
                                        </div>
                                    </div>
                                    <div class ="music-viral key1 " onClick={() => handleUsernameClick("andrean@gmail.com")}>
                                        <div class="picture-viral andrean">
                                        </div>
                                        <div class="title-viral">
                                            satu dua tiga
                                        </div>
                                        <div class ="artist-viral">
                                            Andrean
                                        </div>    
                                    </div>
                                    <div class ="music-viral key1">
                                    <div class="picture-viral josh">
                                        </div>
                                        <div class="title-viral">
                                        4 sehat
                                        </div>
                                        <div class ="artist-viral">
                                            Joshua
                                        </div>
                                    </div>
                                    <div class ="music-viral key1">
                                    <div class="picture-viral sir">

                                    </div>
                                    <div class="title-viral">
                                        quiz dadakan
                                    </div>
                                    <div class ="artist-viral">
                                        Bagus
                                    </div>
                                    </div>
                                </div>,
                <div key={2} class ="viral-flex">
                            <div class ="music-viral key2 ">
                                <div class="picture-viral will2">
                                    
                                </div>
                                <div class="title-viral">
                                    Fried Chicken 
                                </div>
                                <div class ="artist-viral">
                                    William
                                </div>
                            </div>
                            <div class ="music-viral key2" onClick={() => handleUsernameClick("andrean@gmail.com")}>
                                <div class="picture-viral andrean2">
                                </div>
                                <div class="title-viral">
                                    Fried  Rice
                                </div>
                                <div class ="artist-viral">
                                    Andrean
                                </div>    
                            </div>
                            <div class ="music-viral key2">
                            <div class="picture-viral josh2">
                                </div>
                                <div class="title-viral">
                                Fried Tempura
                                </div>
                                <div class ="artist-viral">
                                    Joshua
                                </div>
                            </div>
                            <div class ="music-viral key2">
                            <div class="picture-viral sir2">

                            </div>
                            <div class="title-viral">
                                Fried Asparagus
                            </div>
                            <div class ="artist-viral">
                                Bagus
                            </div>
                            </div>
                        </div>,
                <div key={3} class ="viral-flex">
                            <div class ="music-viral key3">
                                <div class="picture-viral will3">
                                    
                                </div>
                                <div class="title-viral">
                                    Indomie 
                                </div>
                                <div class ="artist-viral">
                                    William
                                </div>
                            </div>
                            <div class ="music-viral key3" onClick={() => handleUsernameClick("andrean@gmail.com")}>
                                <div class="picture-viral andrean3">
                                </div>
                                <div class="title-viral">
                                    Supermie
                                </div>
                                <div class ="artist-viral">
                                    Andrean
                                </div>    
                            </div>
                            <div class ="music-viral key3">
                            <div class="picture-viral josh3">
                                </div>
                                <div class="title-viral">
                                Popmie
                                </div>
                                <div class ="artist-viral">
                                    Joshua
                                </div>
                            </div>
                            <div class ="music-viral key3">
                            <div class="picture-viral sir3">

                            </div>
                            <div class="title-viral">
                               Mie Korea
                            </div>
                            <div class ="artist-viral">
                                Bagus
                            </div>
                            </div>
    </div>
      ];

    useEffect(() => {
        const interval = setInterval(() => {
          setViral((prevViral) => (prevViral === virals.length+1  ? 0 : prevViral + 2)); 
            // || prevViral === virals.length+5 ? 0 : prevViral + 1));
        }, 3500); // interval
    
        return () => clearInterval(interval);
      }, []);

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
                                <div className="underline-viral">
                               
                                    {virals.map((item, index) => {
                                   
                                    return (
                                        <div
                                        key={index}
                                        className={`viral-flex ${index === viral ? 'active' : ''}`}
                                        style={{ transform: `translateX(${(index - viral) * 100}%)` }}
                                    >
                                        {item}
                                        </div>
                                    );
                                    })}
                                    {/* {virals[viral]} */}
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
                        <div className="content">{contents[content]}</div>
                        <div className="buttons-news">
                            <button className ="forward"onClick={handleBackwardClick}>Backward</button>
                            <button className ="forward"onClick={handleForwardClick}>Forward</button>
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
