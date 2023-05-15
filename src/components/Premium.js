import '../styles/Premium.css'
import '../styles/Link.css'
import { Link, useNavigate } from "react-router-dom";
import LeftSelection from './Leftsection';

function Premium(){
    return(<div>
        <div class="Premium">
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