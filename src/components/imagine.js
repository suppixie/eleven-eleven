import { Link } from "react-router-dom";

function Imagine(){
    return(
        <>
        <h2>Close your eyes and imagine yourself getting what you wished for</h2>
        <Link to={'/wish'}><button className="wish-btn">one last thing..</button></Link>
        </>
    )
}
export default Imagine;