import React, { useState } from "react";

const PostApiMethod = () =>{
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [salary,setSalary] = useState("");
    const formSubmit = () =>{
        let data = {name,age,salary};
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.log("Result: ", result)
        })
    }



    // const formSubmit = () =>{
    //     // console.log({name,age,salary});
    //     let data = {name,age,salary};
    //     // fetch("https://dummy.restapiexample.com/api/v1/create",{
    //         fetch("https://jsonplaceholder.typicode.com/posts",{
    //         method: "POST",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     }).then((result)=>{
    //         console.log("Result: ", result)
    //     })
    //}
    return(
        <>
        <h1>Post Api Method</h1>
        <input type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} /> <br/>
        <input type="number" placeholder="age" value={age} onChange={(e)=> setAge(e.target.value)} /> <br/>
        <input type="number" placeholder="salary" value={salary} onChange={(e)=> setSalary(e.target.value)} /> <br/>
        <button onClick={formSubmit}>Submit</button>
        </>
    )
}


export default PostApiMethod;