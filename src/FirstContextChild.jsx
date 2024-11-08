import React, {useContext} from "react";
import SecondContextChild from "./SecondContextChild";

import {Mydata} from "./UseContexthooks";
const FirstContextChild = () =>{
    const {newdData} = useContext(Mydata);
    return(
        <>
        <h2>First Context Child</h2>
        <h3>value data {newdData} </h3>
        <SecondContextChild/>
        </>
    )
}

export default FirstContextChild;