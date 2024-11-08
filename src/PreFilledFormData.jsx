import React, { useEffect, useState } from "react";

const PreFilledFormData = () =>{
    const [data,setData] = useState([]);
    const [formdata,setFormData] = useState({id:null,name:"", age:"", salary:""});

    useEffect(()=>{
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
    },[])

    const EditDetail = (userId) =>{
        let item = data[userId - 1];
        setFormData({
            id:item.id,
            name:item.name,
            age:item.age,
            salary:item.salary,
        })
    }
    return(
        <>
        <h1>Pre Filled Form Data</h1>
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
            <input type="text" value={formdata.name} /> <br />
            <input type="text" value={formdata.age} /> <br />
            <input type="text" value={formdata.salary} /> <br />
            <button type="button">Update</button> <br />
        </div>
        </>
    )
}


export default PreFilledFormData;