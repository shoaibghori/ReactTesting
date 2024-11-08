import React, { useEffect, useState } from "react";


const DeleteApiMethod = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        showList();
    })

    const showList = () =>{
        fetch("http://localhost:3000/users").then((result)=>{
            result.json().then((Response)=>{
                setData(Response)
            })
        })
    }
        const DeleteData = (userid)=>{
            fetch(`http://localhost:3000/users/${userid}`,{
                method: "DELETE",
            }).then((result)=>{
                result.json().then((Response)=>{
                    showList();
                })
            })
            }

    return(
        <>
            <h1>Delete Api Method</h1>
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
                                <button onClick={()=> DeleteData(val.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    )
}


export default DeleteApiMethod;


// import React, { useEffect, useState } from "react";

// const DeleteApiMethod =()=>{
//     const [data,setData]= useState([]);
//     useEffect(()=>{
//         fetch("http://localhost:3000/users").then((result)=>{
//             result.json().then((Response)=>{
//                 setData(Response);
//             })
//         })
//     },[])

//     const DeleteData =(userId) =>{
//         fetch(`http://localhost:3000/${userId}` ,{
//                 method:'DELETE',
//         }).then((result)=>{
//             result.json().then((Response)=>{
//                 console.log(Response);
//             })

//         })  
//     }
//     return(
//         <>
//         <h1>DeleteApiMethod</h1>
//         <table className="table" border="1">
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Age</th>
//                     <th>Salary</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((val,i)=>
//                 <tr key={i}>
//                     <td>{val.id}</td>
//                     <td>{val.name}</td>
//                     <td>{val.age}</td>
//                     <td>{val.salary}</td>
//                     <button onClick={() => DeleteData(val.id)}>Delete</button>
//                 </tr>
//                 )}
//             </tbody>
//         </table>
//         </>
//     )
// }


// export default DeleteApiMethod;