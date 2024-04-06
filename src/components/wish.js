import Typist from "react-typist";

function Wish(){
    return(
        <>
        <h1><Typist avgTypingDelay={80} cursor={{show:false}}>The Universe is working on your wish </Typist></h1>
        <h3>Here's some pixie dust</h3>
        </>
    )

}
export default Wish;