import React, {useContext} from "react";
import {Mydata} from "./UseContexthooks";



const SecondContextChild = () =>{
    const {newdData, sal} = useContext(Mydata);
    const Slary = 50000;
    return(
        <>
        <h2>Second Context Child {newdData}</h2>
        <button onClick={() => sal(Slary)}>Salary</button>
        </>
    )
}

export default SecondContextChild;