import '../styles/Premium.css'
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";
import LeftSelection from './Leftsection';

function Premium(){
    return(<div>
        <div class="Premium">
            {/* <div class="left-premium">
            <div class="nav-bar-premium">
                <div class="home-premium">
                <Link to ="/home" className="link">HOME</Link>
                </div>
                <div class="produce-premium">
                <Link to ="/" className="link">PRODUCE</Link>
                </div>
                <div class ="premium-premium">
                <Link to ="/premium" className="link">PREMIUM</Link>
                </div>
                <div class="log-out-premium">
                <Link to ="/" className="link">LOG OUT</Link>
                </div>
            </div>
            </div> */}
            <LeftSelection></LeftSelection>
            <div class="right-premium">
            <div class="header-premium">
                    <div class ="title-premium">G O - P R E M I U M !</div>
                </div>
                    <div class ="container-premium">
                        <div class="content-premium">
                            <div class="title-content-premium">
                                Premium Contents!
                            </div>
                        <ul>
                            <li>Create Music with Music Maker</li>
                            <li>Sound Merchant Access</li>
                            <li>100% ads free</li>
                        </ul>
                        </div>
                    </div>

            </div>
        </div>
    </div>)
}
export default Premium;