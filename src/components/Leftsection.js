import '../styles/Leftsection.css'
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import React, { useState, useEffect} from "react";

function LeftSelection(){

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await axios.get('http://localhost:8000/');
            setMessage(response.data.messages);
        };
        fetchMessage();
    }, []);

    console.log (message);
    return(<div>

        <div class ="left-part">
        <div class="nav-bar">
                <div class ="header-navbar">
                    <div class ="sp">

                    </div>
                    <span class="title-header-navbar">
                        {message}
                    </span>
                    <span class="logo-header-navbar">

                        <FontAwesomeIcon icon={faUserCircle} />
                    </span>
                    <div class ="edit-header-navbar">
                        <button className='edit-button'>
                        <Link to ="/profile" className='edit-button-decoration'>CHANGE</Link>
                        </button>
                    </div>
                </div>
                <div class="home-navbar choice">
                <Link to ="/home" className="link link-bh">HOME</Link>
                </div>
                <div class="posted-navbar choice">
                <Link to ="/posted" className="link link-bh">POSTED</Link>
                </div>
                <div class="produce-navbar choice">
                <Link to ="/produce" className="link link-bh">PRODUCE</Link>
                </div>
                <div class ="premium-navbar choice">
                <Link to ="/premium" className="link link-bh">PREMIUM</Link>
                </div>
                <div class="log-out-navbar choice">
                <Link to ="/login" className="link link-bh">LOGOUT</Link>
                </div>
            </div>

        </div>
    </div>)
    
}
export default LeftSelection;
