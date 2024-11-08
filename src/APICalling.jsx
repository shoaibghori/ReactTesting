import React, { useEffect, useState } from "react";

const APICalling = () =>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((Response)=>{
                setData(Response);
            })
        });
    },[]);
    return(
        <>
        <h2>Api Claiiing</h2>
        <table>
            <tbody>

        {data.map((value,i)=>
            <tr key={i}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.address.city}</td>
            </tr>
        )}

            </tbody>
       </table>
        </>
    )
}


export default APICalling;

// import React, { useEffect, useState } from "react";
// const APICalling = () =>{
//     const [data,setData] = useState([]);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//             console.log(result);
//             result.json().then((Response)=>{
//                 setData(Response);
//             })
//         })
//     },[])
//     return(
//         <>
//         <table>
//              <thead>
//                  <tr>
//                      <th>ID</th>
//                      <th>Name</th>
//                      <th>userName</th>
//                      <th>Email</th>
//                      <th>Address</th>
//                  </tr>
//              </thead>
//              <tbody>
//              {data.map((value,i)=>
          
//                  <tr key={i}>
//                      <td>{value.id}</td>
//                      <td>{value.name}</td>
//                      <td>{value.username}</td>
//                      <td>{value.email}</td>
//                      <td>{value.address.city}</td>
//                  </tr>
//              )}
//              </tbody>
//          </table>
//         </>
//     )
// }
// export default APICalling;
// import React, { useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';


// const APICalling =()=>{
//     const [data,setData]= useState([]);
//     useEffect(()=>{     
//             fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//                 //console.log(result);
//                 result.json().then((Response)=>{
//                     setData(Response);
//                 })
//             })
//         },[])
//     return(
//         <>
//         <h1>APICalling</h1>
//         <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>userName</th>
//                     <th>Email</th>
//                     <th>Address</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {data.map((value,i)=>
            
//                 <tr key={i}>
//                     <td>{value.id}</td>
//                     <td>{value.name}</td>
//                     <td>{value.username}</td>
//                     <td>{value.email}</td>
//                     <td>{value.address.city}</td>
//                 </tr>
//             )}
//             </tbody>
//         </Table>
//         </>
//     )
// }

// export default APICalling;