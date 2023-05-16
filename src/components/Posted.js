import '../styles/Posted.css'
import '../styles/Link.css'
import './Leftsection'
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";



function Posted() {

    const[searchChat,setSearchChat]=useState("")
    const [isOpen, setIsOpen] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription]=useState("");
    const [attachment, setAttachment]=useState("");

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    return(<div>
        <div class ="Posted">            
        <LeftSelection></LeftSelection>
        <div class = "right-posted">
            <div class="header-posted">
                <div class="yourpost"> YOUR POST</div>
            </div>
            <div class = "container-posted">
                <div class="container-header-posted">
                    <div class="Welcome-posted">
                        <h1>WELCOME!</h1>
                    </div>
                    <div class="username-posted">
                        asep
                        {/* nanti harus diganti ke pake use use apa la itu */}
                    </div>
                    <div class="search-posted">
                        <div class="search-your-music-chat">
                            Search your music chat!
                        </div>
                        <div class="search-music-chat">
                            <input
                                type="text"
                                className="search-bar"
                                value={searchChat}
                                onChange={(e) => setSearchChat(e.target.value)}
                                placeholder="Search"
                            />
                        </div>
                        <div class="Filter-NewPost">
                            <button
                                className="completed__btn filter-btn"    
                            >
                                Completed
                                </button>
                                <button
                                className="like__btn filter-btn"    
                            >
                                Like
                                </button>
                                <button
                                className="latest__btn filter-btn "    
                            >
                                Latest
                                </button>
                                <button
                                    className="newpost__btn "
                                    onClick={togglePopup}    
                                >
                                    New Post
                                {/* <Popup>New Post</Popup> */}
                                
                                </button>
                                {isOpen && (
                                    <div className="popup">
                                    <h2>Title</h2>
                                    <input
                                        type="text"
                                        className="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder="Title"
                                    />
                                    <h3>Description</h3>
                                    <input
                                        type="text"
                                        className="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Description"
                                    />
                                    
                                    <button onClick={togglePopup}>Close</button>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <div class ="underline">
                            
                </div>
            </div>
        </div>
        
        </div>
        {/* </section> */}
        {/* <section class ="two-posted">
        <div class ="two-posted-right">
                AYAM
        </div>
        
        </section> */}



    </div>)


}

export default Posted; 