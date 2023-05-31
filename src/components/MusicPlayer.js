import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import "../styles/music.css"

const MusicPlayer = ({ musicUrl, musicName }) => {
  const [fileExists, setFileExists] = useState(true);

  useEffect(() => {
    // Check if the musicUrl is defined and accessible
    if (musicUrl) {
      fetch(musicUrl)
        .then(response => {
          if (!response.ok) {
            setFileExists(false); // Set fileExists to false if the file is not accessible
          }
        })
        .catch(error => {
          console.error('Error checking file existence:', error);
        });
    }
  }, [musicUrl]);

  if (!musicUrl || !fileExists) {
    return null; // Render nothing if musicUrl is not defined or the file is not accessible
  }

  return (
    <div>
      <div className='real-name'>
        <h4>{musicName}</h4>
      </div>
       <div className="music-player-container">

      <div className="music-player-box">
        <ReactAudioPlayer src={musicUrl} controls className="audio-player" />
      </div>
    </div>
    </div>
  );
};

export default MusicPlayer;
