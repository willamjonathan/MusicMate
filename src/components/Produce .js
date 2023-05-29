import "../styles/Produce.css";
import './Leftsection';
import LeftSelection from "./Leftsection";

function Produce(){
    return(<>
        <LeftSelection></LeftSelection>
        <div class ="right-produce">
            <div class ="header-produce">
                <div class = "title-produce">Produce your music</div>
            </div>
            <div class ="button-produce">
                <span class ="lite-produce"> LITE </span>
                <span class ="premium-produce"> PREMIUM </span>

            </div>
        </div>
    
    </>)

}
export default Produce;