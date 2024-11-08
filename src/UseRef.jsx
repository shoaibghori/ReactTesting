import React, { useRef } from "react";

const UseRef  = () =>{
    const Refnew = useRef();
    function myFun(){
        console.log(Refnew.current.value);
        Refnew.current.value = "Shoaib"
        Refnew.current.style.backgroundColor= "green"
        Refnew.current.style.color = "#fff"
    }
    return(
        <>
        <input type="text" ref={Refnew}/>
        <button onClick={()=> myFun()}>Click</button>
        </>
    )
}


export default UseRef;