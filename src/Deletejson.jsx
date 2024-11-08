import React, { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';


const Deletejson =()=>{
    const [data,setData]= useState([]);
    useEffect(()=>{
        showList();
    },[])
    
    const showList = () =>{
        fetch("http://localhost:3000/users").then((result)=>{
            result.json().then((response)=>{
                setData(response);
            })
        })
    }

    const DelApi= (userId) =>{
        console.log(userId);
        fetch(`http://localhost:3000/users/${userId}`,{
            mthod:'DELETE'
        }).then((result)=>{
            result.json().then((response)=>{
                console.log(response);
                showList();

            })
        })
    }

    return(
        <>
        <h1>Deletejson</h1>
        <Table border="1" striped hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
            data.map((val,i)=> 
            <tr key={i}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.salary}</td>
                <td><button onClick={()=> DelApi(val.id)}>Delete</button></td>
            </tr>
            )}
            </tbody>
        </Table>
        </>
    )
} 

export default Deletejson;