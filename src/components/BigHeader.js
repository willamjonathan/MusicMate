import '../styles/BigHeader.css'
import React, { useEffect, useState } from "react";
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle, faSearch
} from '@fortawesome/free-solid-svg-icons'


function BigHeader(){
    const[search,setSearch]=useState("");
    
    return(<div>
        <div class="BigHeader">
        <div class ="header-home">
            <div class="search-section">
                <form>
                        <input
                            type="text"
                            className="search-bar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="   Search"
                            
                            />
                        <div class="search-btn-bigheader">   
                        <button type="submit" class="search-btn-bh sbh">Search</button>

                        
                        </div>
                </form>
                        {/* <div class="profile-icon"> */}

                        {/* <Link to ="/profile" className="profileicon">
                        <FontAwesomeIcon icon={faUserCircle} />
                        </Link> */}
                        {/* </div> */}
            </div>
                        <div class="jumbotron-home">
                            <div class="jumbotron-picture"></div>
                        </div>
                    </div>
        </div>

    </div>)
}

export default BigHeader;