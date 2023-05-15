import '../styles/BigHeader.css'
import React, { useEffect, useState } from "react";
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";

function BigHeader(){
    const[search,setSearch]=useState("");
    return(<div>
        <div class="BigHeader">
        <div class ="header-home">
            <div class="search-section">
                        <input
                            type="text"
                            className="search-bar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search"
                            />
                        <div class="profile-icon">
                        <Link to ="/profile" className="profile">profile</Link>
                        </div>
            </div>
                        <div class="jumbotron-home">
                            
                        </div>
                    </div>
        </div>

    </div>)
}

export default BigHeader;