import axios from 'axios';
import React, { useState, useEffect } from "react";

function PostForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tweet, setTweet] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await axios.get('https://backend-musicmate-andrean2305.vercel.app/');
      setMessage(response.data.messages);
    };
    fetchMessage();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      // Check if a file is selected
      if (file) {
        // Prepare form data
        const formData = new FormData();
        formData.append('file', file);

        // Send a POST request to the backend /upload/music endpoint for file upload
        const fileResponse = await fetch('https://backend-musicmate-andrean2305.vercel.app/upload/music', {
          method: 'POST',
          body: formData,
        });

        if (!fileResponse.ok) {
          const errorData = await fileResponse.json();
          throw new Error(`File upload failed! HTTP error - status: ${fileResponse.status}, ${errorData.detail}`);
        }
      }
      
      // Check if a file is selected
      if (file) {
        const allowedExtensions = ['.mp3', '.wav', '.ogg'];
        const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

        if (!allowedExtensions.includes(fileExt)) {
          throw new Error('Invalid file type. Only MP3, WAV, and OGG files are allowed.');
        }
      }

      // Retrieve the access token from local storage
      console.log('Retrieving access token...');
      const token = localStorage.getItem('access_token');
      console.log('Access Token:', token);

      // Send a POST request to the backend /tweets endpoint for tweet submission
      const tweetResponse = await fetch('https://backend-musicmate-andrean2305.vercel.app/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          search_term: searchTerm,
          tweets: [{ text: tweet }],
        }),
      });

      if (!tweetResponse.ok) {
        throw new Error(`Tweet submission failed! HTTP error - status: ${tweetResponse.status}`);
      }

      const response = await fetch('https://backend-musicmate-andrean2305.vercel.app/userPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Response from the API
      } else {
        console.log('Error:', response.status);
      }
      
      // Reset the form
      setSearchTerm('');
      setTweet('');
      setFile(null);

      // Reload the page
      window.location.reload();
    } catch (error) {
      setError(error.message);
      console.log('Error:', error);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          <div class="text-timeline">Title</div>
          <input className = "Timeline-input" type="text" name="searchTerm" placeholder='Title' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <label>
        <div class="text-timeline">Tweet</div>
          <input className = "Timeline-input" type="text" name="tweet"  placeholder='Tweet' value={tweet} onChange={(event) => setTweet(event.target.value)} />
        </label>
        <label>
        <div class="text-timeline">File</div>
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <button type="submit" className = "timeline-btn">Submit</button>
      </form>

    </div>
  );
}

export default PostForm;
