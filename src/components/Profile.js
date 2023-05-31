import '../styles/Profile.css'
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";
import LeftSelection from './Leftsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import React, { useState, useEffect} from "react";

function Profile(){
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await axios.get('http://localhost:8000/');
            setMessage(response.data.messages);
        };
        fetchMessage();
    }, []);
    return(<div>
        <div class="Profile">
            <LeftSelection/>
            <div class="right-profile">
                <div class="header-profile">
                    <div class ="profile-profile">Profile</div>
                </div>
                <div class="container-profile">
                    <div class ="box-profile">

                    <div class="picture-profile">
                    <div class ="profile-logo"><FontAwesomeIcon icon={faUserCircle} /></div>
                    </div>
                    <div class ="details-profile">
                        <div class ="name-profile textprofile">
                            Email:
                        </div>
                        <div class="textfield1-profile">
                            {message}
                        </div>
                        {/* <div class ="username-profile textprofile">
                            Username:
                        </div>
                        <div class="textfield2-profile">
                             *****
                        </div>
                        <div class ="email-profile textprofile">
                            Email:
                        </div>
                        <div class="textfield3- profile">
                        *****
                        </div> */}
                        
                    </div>
                    <div class="edit-button-profile">
                        EDIT
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>)
}
export default Profile;