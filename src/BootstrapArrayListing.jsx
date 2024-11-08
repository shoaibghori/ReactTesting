import React from "react";

// import BootstrapAccordian from "./BootstrapAccordian";
// import Button from 'react-bootstrap/Button';
import {Table} from 'react-bootstrap';


const BootstrapArrayListing = ()=>{
    const EmployeeInfo=[
        {name:"shoaib", age:"25", email:"sam@abc.com"},
        {name:"Ghori", age:"125", email:"sfgam@abc.com"},
        {name:"shoaib", age:"26", email:"sam@abc.com"},
        {name:"shoaib", age:"30", email:"sam@abc.com"},
        {name:"Ali", age:"252", email:"sasdam@abc.com"},
        {name:"saleem", age:"325", email:"saleem@abc.com"}
    ]
    return(
        <>
        <h1>BootstrapArrayListing</h1>
        <Table className="table" striped hover bordered variant="dark">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
                {

                    EmployeeInfo.map((item, i)=>
                        item.name === "shoaib" ? 
                        <tr key={i}>    
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                         </tr>
                         :null
                    )
                }
          
            </tbody>
        </Table>
        </>
    )
}


export default BootstrapArrayListing;