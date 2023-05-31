import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import '../styles/Link.css'

import { Link, useNavigate } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";
import '../styles/UserPostPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'
function UserPostPage() {
  const { username } = useParams();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await axios.get('http://localhost:8000/Choose');
      setMessage(response.data.messages);
    };
    fetchMessage();
  }, []);

  const [songs, setSongs] = useState([]);
  const [posted, setPosted] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.post("http://localhost:8000/TakeNow");
        setSongs(response.data.songs);
        setPosted(response.data.posted);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSongs();
  }, []);
  // console.log(songs)

  // Fetch and display user's posts using the username

  return (
    <div className="UserPostPage">
    <div className ="theupp">
    <div class='upp-backbutton'>
        <Link to ="/posted" className="back-btn-upp">Back</Link>
      </div>
      <div class =" upp-container">
        <div class="user-posts-upp">
          POST
        </div>
      <div class="upp-picture-profile">
                    <div class ="upp-profile-logo"><FontAwesomeIcon icon={faUserCircle} /></div>
                    </div>
      <div class ='upp-container-details'>
      
      <div class ="upp-username">
      {/* User: {username} */}
      
      {message}</div>
      {/* Display user's posts */}
      
      <div class ="upp-posts-container">
      {/* User Songs */}
    {songs.map((song,index) => (

      <MusicPlayer key={index} musicUrl={`http://localhost:8000/music/${song}`} musicName={posted[index]} />
      // <React.Fragment key={index}>
      //     <MusicPlayer musicUrl={`http://localhost:8000/music/${song.hashedName}`} />
      //     <p>{song.realName}</p>
      // </React.Fragment>
    ))}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default UserPostPage;
