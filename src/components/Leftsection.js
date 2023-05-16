import '../styles/Leftsection.css'
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";

function LeftSelection(){
    return(<div>

        <div class ="left-part">
        <div class="nav-bar">
                <div class="home-navbar">
                <Link to ="/home" className="link">HOME</Link>
                </div>
                <div class="posted-navbar">
                <Link to ="/posted" className="link">POSTED</Link>
                </div>
                <div class="produce-navbar">
                <Link to ="/" className="link">PRODUCE</Link>
                </div>
                <div class ="premium-navbar">
                <Link to ="/premium" className="link">PREMIUM</Link>
                </div>
                <div class="log-out-navbar">
                <Link to ="/login" className="link">LOG OUT</Link>
                </div>
            </div>

        </div>
    </div>)
    
}
export default LeftSelection;