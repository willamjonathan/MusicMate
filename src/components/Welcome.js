import '../styles/Welcome.css';
import backgroundImage from '../img/BackgroundImage.png';
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";


function Welcome(){
    return(<div>
        <div 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '100vh',
      }}
      >
        <div class ="start">
        <Link to ="/login" className="link link-bh">TRY MUSICMATE</Link>
            
        </div>

        </div>
        {/* <div class ="welcome-container">
        <div class ="title-welcome">
            
            </div>
          <div class = "picture-welcome">

          </div>
          <div class ="welcome-button"></div>
        </div> */}
    </div>)

}

export default Welcome;