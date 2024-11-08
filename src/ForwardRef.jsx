import React, { useRef } from "react";
import ForwardChild from "./ForwardChild";


const ForwardRef =()=>{
let myRef = useRef();
    function myFunction(){
        myRef.current.value= "Shoaib";
        myRef.current.style.background="red"
        myRef.current.style.color= "white";
        myRef.current.focus();
    }
    return(
        <>
        <h1>Forward Ref</h1>
        <ForwardChild ref= {myRef}/>
        <button onClick={()=>{myFunction()}}>submit</button>
        </>
    )
}

export default ForwardRef;