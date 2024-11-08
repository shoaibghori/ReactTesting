import React from "react";
import EmployeeData from "./EmployeeData";
const Reuse = () =>{
    const EmployeeInfo=[
        {name:"shoaib", age:"25", email:"sam@abc.com"},
        {name:"Ghori", age:"125", email:"sfgam@abc.com"},
        {name:"Ali", age:"252", email:"sasdam@abc.com"},
        {name:"saleem", age:"325", email:"saleem@abc.com"}
    ]
    return(
        <>
        {
            EmployeeInfo.map((item,i)=> 
                <EmployeeData key={i} data={item}/>            
            )
        }
        </>
    )
}


export default Reuse;