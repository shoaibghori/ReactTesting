import React, { useContext } from "react";
import SecondChild from "./SecondChild";
import {MyData} from "./UseContexthooks";

const FirstChild = () =>{
    const {valueData} = useContext(MyData);
return(
    <>
    <h1>First Child</h1>
    <h1>Value Data: {valueData}</h1>
    <SecondChild/>
    </>
);
}

export default FirstChild;