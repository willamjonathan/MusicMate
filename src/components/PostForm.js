// const PostTask =({title, setTitle, description,
//     setDescription,handleFileSelect, togglePopup, handleUpload
//     } )=> {
//         return(
//             <>
//             <h2>Title</h2>
//                 <form>
//                 <input
//                     type="text"
//                     className="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Title"
//                 />
//                 <h3>Description</h3>
//                 <input
//                     type="text"
//                     className="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Description"
//                 />
//                 <input className="post-btn" type="file" onChange={handleFileSelect} />
//                 <div class = "popup-footer">
                                    
//                                     <button className="post-btn"onClick={togglePopup}>Close</button>

//                                     <button className="post-btn" onClick={handleUpload} type ='submit'>Upload</button>
//                 </div>
//                 </form>
//             </>

//         )
// }
// export default PostTask;

// import React, { useState } from 'react';
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
      const response = await axios.get('http://localhost:8000/');
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
        const fileResponse = await fetch('http://localhost:8000/upload/music', {
          method: 'POST',
          headers: {

          },
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
      const tweetResponse = await fetch('http://localhost:8000/tweets', {
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

      const response = await fetch('http://localhost:8000/userPost', {
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
      <h1>{message}</h1>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Search term:
          <input type="text" name="searchTerm" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        </label>
        <label>
          Tweet:
          <input type="text" name="tweet" value={tweet} onChange={(event) => setTweet(event.target.value)} />
        </label>
        <label>
          File:
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default PostForm;
