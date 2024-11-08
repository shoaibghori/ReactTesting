import React,{useContext} from "react";
import {MyData} from "./UseContexthooks";


const SecondChild = () =>{
    const {valueData,getSal} = useContext(MyData);
    const salary = 50000;

return(
    <>
    <h1>Second Child</h1>
    <h1>Value Data in 2nd Child: {valueData}</h1>
    <button onClick={()=>getSal(salary)}>GetSalary</button>

    </>
)
}

export default SecondChild;