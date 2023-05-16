import '../styles/Posted.css'
import '../styles/Link.css'
import './Leftsection'
import LeftSelection from './Leftsection';
import React, { useEffect, useState } from "react";

function Posted() {

    const[searchChat,setSearchChat]=useState("")
    return(<div>
        <div class ="Posted">
            
        <LeftSelection></LeftSelection>
        <div class = "right-posted">
            <div class="header-posted">
                <div class="yourpost"> YOUR POST</div>
            </div>
            <div class = "container-posted">
                <div class="container-header-posted">
                    <div class="Welcome">
                        WELCOME!
                    </div>
                    <div class="username-posted">
                        asep
                        {/* nanti harus diganti ke pake use use apa la itu */}
                    </div>
                    <div class="Search-posted">
                        <div class="Search-your-music-chat">
                            Search your music chat!
                        </div>
                        <div class="Search-music-chat">
                            <input
                                type="text"
                                className="search-bar"
                                value={searchChat}
                                onChange={(e) => setSearchChat(e.target.value)}
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>



    </div>)


}

export default Posted; 