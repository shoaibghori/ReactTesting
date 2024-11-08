import React, { useEffect, useState } from "react";

const PutApiMethod = () =>{
    const [data,setData] = useState([]);
    const [formdata,setFormData] = useState({id:null,name:"", age:"", salary:""});

    useEffect(()=>{
        ShowList();  
    },[])
const ShowList = () =>{
    fetch("http://localhost:3000/users").then((result)=>{
        result.json().then((Response)=>{
            console.log(Response);
            setData(Response);
            setFormData({
                id:Response[0].id,
                name:Response[0].name,
                age:Response[0].age,
                salary:Response[0].salary,
            });
        })
    })
}
    const EditDetail = (userId) =>{
        let item = data[userId - 1];
        setFormData({
            id:item.id,
            name:item.name,
            age:item.age,
            salary:item.salary,
        })
    }

    const UpdateData = () =>{
    let id = formdata.id;
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata)
        }).then((result)=>{
            result.json().then((response)=>{
                console.log(response);
                ShowList();  

            })
        })
        
    }
    return(
        <>
        <h1>Put Api Method</h1>
        <table border={1}>
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
                data.map((val,i)=>{
                    return(
                    <tr key={i}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.salary}</td>
                        <td>
                            <button type="button" onClick={()=> EditDetail(val.id)}>Edit</button>
                        </td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
        <br />
        <div>
            <input type="text" value={formdata.name} onChange={(e)=> setFormData({...formdata, name: e.target.value})} /> <br />
            <input type="text" value={formdata.age} onChange={(e)=> setFormData({...formdata, age: e.target.value})} /> <br />
            <input type="text" value={formdata.salary} onChange={(e)=> setFormData({...formdata, salary: e.target.value})} /> <br />
            <button type="button" onClick={UpdateData}>Update</button> <br />
        </div>
        </>
    )
}


export default PutApiMethod;