import "../styles/Produce.css";
import './Leftsection';
import LeftSelection from "./Leftsection";
import { useNavigate } from "react-router-dom";

function Produce(){
    const navigate = useNavigate();

    async function lite() {
       navigate(`/music-lite`);
    }

    async function premium() {
        navigate(`/music-premium`);
    }

    return(<>
        <LeftSelection></LeftSelection>
        <div class ="right-produce">
            
            <div class ="header-produce">
                <div class = "title-produce">Produce your music</div>
            </div>
            <div class ="button-produce">
                <span class ="lite-produce" onClick={() => lite()}> LITE </span>
                <span class ="premium-produce" onClick={() => premium()}> PREMIUM </span>

            </div>
        </div>
    
    </>)

}
export default Produce;