import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation} from "react-router-dom";
function Magic( ){
    const location = useLocation();

    useEffect=(()=>{
        const timer=setTimeout(()=>{
            window.location.href = '/imagine.js';},
            15000);
        
        return() => clearTimeout(timer);
    },[]);

    const name = new URLSearchParams(location.search).get('data');
    return(
        <>
        <h1>${name},the universe is listening to you..</h1>
        <Link to="/imagine"><button className="imagine-btn">just one last thing</button>
        </Link>
        </>
    )

}
export default Magic;