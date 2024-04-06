import '../style/homepage.css';
import React, { useState } from "react";
import {Link} from "react-router-dom";

function Homepage(){
    const [name,setName]=useState("")

    const handleInputChange=(e)=>{
        setName(e.target.value);
    }


    return(
        <>
        <h1 className='eleven'> Its 11:11 </h1>
        <input type='text'className='name' value={name} onChange={handleInputChange} placeholder="Your Name.."/>
        <h3>Make a wish</h3>
        <p>Click below when you have made your wish</p>
        <Link to={`/magic?data=${name}`}><button className="magic-btn">Magic</button></Link>
        </>
    )
}
export default Homepage;