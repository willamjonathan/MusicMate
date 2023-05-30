import React, { useState, useEffect, useReducer } from "react";
import fetch from "isomorphic-fetch";
import { v4 as uuidv4 } from "uuid";
import "../styles/PostListStyle.css"
import MusicPlayer from "./MusicPlayer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostList() {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const navigate = useNavigate();
  const [songs, setSongs] = useState([]);

  const handleUsernameClick =async (username) => {
    try {
      const url = `http://localhost:8000/ChooseNow?email=${encodeURIComponent(username)}`;
      const response = await fetch(url, {
        method: "POST",
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Handle the response data
      const data = await response.json();
      console.log(data); // Assuming the response contains the songs data
  
      // Do any necessary UI updates based on the response data
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
    navigate(`/user-post-page`);

  };

  useEffect(() => {
    async function fetchTweets() {
      const response = await fetch("http://localhost:8000/tweets", {
        credentials: "include", // include cookies in the request
      });
      const data = await response.json();
      setTweets(
        data.tweets.map((tweet) => ({ ...tweet, isLiked: false }))
      );
    }

    fetchTweets();
  }, []);

  useEffect(() => {
    const searchTermCookie = getCookie("search_term");
    if (searchTermCookie) {
      setSearchTerm(searchTermCookie);
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setCookie("search_term", value);
  };

  const handleLikeClick = async (docId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/tweets/${docId}/like`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await response.json();
      const updatedTweets = tweets.map((tweet) => {
        if (tweet.post_id === docId) {
          const updatedLove = tweet.love + (tweet.isLiked ? -1 : 1);
          return {
            ...tweet,
            love: updatedLove,
            isLiked: !tweet.isLiked,
          };
        } else {
          return tweet;
        }
      });
      setTweets(updatedTweets);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislikeClick = async (docId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/tweets/${docId}/dislike`,
        {
          method: "POST",
          credentials: "include",
        }
      );
      const data = await response.json();
      const updatedTweets = tweets.map((tweet) => {
        if (tweet.post_id === docId) {
          return {
            ...tweet,
            love: tweet.love - 1,
            isLiked: false,
          };
        } else {
          return tweet;
        }
      });
      setTweets(updatedTweets);
    } catch (error) {
      console.error(error);
    }
  };

  const addCommentToTweet = async (postId, comment) => {
  try {
      const response = await fetch(`http://localhost:8000/tweets/${postId}/comment`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  
  const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [showAll, setShowAll] = useState(false);
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await fetch(`http://localhost:8000/tweets/${postId}/comments`);
          const data = await response.json();
          if (Array.isArray(data)) {
            setComments(data);
          } else if (data.comments) {
            setComments(data.comments);
          } else {
            console.error('Invalid response data');
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchComments();
    }, [postId]);
  
    const handleClick = () => {
      setShowAll(!showAll);
    };
  
    const visibleComments = showAll ? comments : comments.slice(0, 3);
  
    return (
      <div>
        {visibleComments.map((comment) => (
          <p key={comment}>{comment}</p>
        ))}
        {comments.length > 3 && !showAll && (
          <button className = "timeline-btn"onClick={handleClick} >Show all comments</button>
        )}
        {showAll && (
          <button className = "timeline-btn" onClick={handleClick}>Hide comments</button>
        )}
      </div>
    );
  };
  
  function CommentForm({ postId }) {
    const [commentInput, setCommentInput] = useState("");
  
    const handleCommentSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await addCommentToTweet(postId, commentInput);
        // Clear comment input
        setCommentInput("");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleCommentInputChange = (event) => {
      setCommentInput(event.target.value);
    };
  
    return (
      <form onSubmit={handleCommentSubmit}>
        <label>
          Comment:
          <input className ="Timeline-input"type="text" value={commentInput} onChange={handleCommentInputChange} />
        </label>
        <button type="submit" className = "timeline-btn">Add Comment</button>
      </form>
    );
  }
  

  const filteredTweets = tweets.filter((tweet) =>
    tweet.search_term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="waduh">
        <input
            className="bar Timeline-input"
            type="text"
            placeholder="Search tweets by search term"
            value={searchTerm}
            onChange={handleSearch}
            style={{ paddingTop: '15px'}}
        />
      <div class ="underline-timeline">
        </div>
      {filteredTweets.map((tweet) => (
        <div key={uuidv4()}>
          <div className ="username-timeline" onClick={() => handleUsernameClick(tweet.username)}>
          {/* <h1 className="username" onClick={() => handleUsernameClick(tweet.username)}> */}
            {tweet.username}
          {/* </h1> */}
          </div>
          <div class ="title-timeline">{tweet.search_term}
          {tweet.tweets.map((t) => (
            <p key={uuidv4()}>{t.text}</p>
          ))}</div>
          <h2>{tweet.musicName}</h2>
          <MusicPlayer musicUrl={`http://localhost:8000/music/${tweet.music}`} />
          <div className="love-container">
            <h3>{tweet.love}</h3>
            <span className="love-symbol">❤️</span>
          </div>
          <button
            onClick={() =>
              tweet.isLiked ? handleDislikeClick(tweet.post_id) : handleLikeClick(tweet.post_id)
            }
          >
            {tweet.isLiked ? "Dislike" : "Like"}
          </button>
          <CommentList postId={tweet.post_id} />
          <CommentForm postId={tweet.post_id} />
          <div class ="underline-timeline">
        </div>
        </div>
      ))}
    </div>
  );
  
  
}

function setCookie(key, value) {
  document.cookie = `${key}=${value}; path=/;`;
}

function getCookie(key) {
  const name = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for(let i = 0; i <cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

export default PostList;
