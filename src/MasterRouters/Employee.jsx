import React from "react";
import { useParams } from "react-router-dom";


const Employee = () =>{
    const {name,age} = useParams();
    return(
        <>
        <h1>Employee name is {name} {age} </h1>
        </>
    )
}

export default Employee;