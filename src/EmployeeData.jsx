import React from "react";

const EmployeeData = (props)=>{
    return(
        <>
        <h2>{props.data.name}</h2>
        <h2>{props.data.email}</h2>
        <h2>{props.data.age}</h2>
        </>
    )
}

export default EmployeeData;