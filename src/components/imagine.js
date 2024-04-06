import { Link } from "react-router-dom";
import Typist from "react-typist";

function Imagine(){
    return(
        <>
        <h2><Typist avgTypingDelay={80} cursor={{show:false}}> Close your eyes and imagine yourself getting what you wished for </Typist></h2>
        <Link to={'/wish'}><button className="wish-btn">one last thing..</button></Link>
        </>
    )
}
export default Imagine;