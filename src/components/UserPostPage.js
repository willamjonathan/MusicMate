import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import MusicPlayer from "./MusicPlayer";

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

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.post("http://localhost:8000/TakeNow");
        setSongs(response.data.songs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSongs();
  }, []);

  // Fetch and display user's posts using the username

  return (
    <div>
      <h1>User: {username}</h1>
      <h1>{message}</h1>
      {/* Display user's posts */}

      <h1>User Songs</h1>
    {songs.map((song, index) => (
      <MusicPlayer key={index} musicUrl={`http://localhost:8000/music/${song}`} />
    ))}
    </div>

  );
}

export default UserPostPage;
