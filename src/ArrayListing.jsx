import React from "react";

const ArrayListing = () =>{
    const carName =  [
        {id: 1, name: "Shoaib", class:"BCOM", age: "30"},
        {id: 2, name: "Zohaib", class:"DCOM", age: "40"},
        {id: 3, name: "Sulman", class:"MCOM", age: "50"},

        ];
    // carName.map((item)=>{
    //     console.log("Carn name is " , item);
    // })
//     for(let i=0; i < carName.length; i++){
//         console.log("Car name is " , carName[i]);
// }

    return(
        <>
        <p>Array listing is </p>
        <table>
            <tbody>
        {
            carName.map((item)=>
              
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.class}</td>
                        </tr>
               
            )
        }
        </tbody>
             </table>

    {/* {
    carName.map((item,value,i)=>{
     return(
        <>
           <p id={value}>{item}</p>
        </>
     )
    })
    } */}

        </>
    )
}

export default ArrayListing;

// import React from "react";

// const ArrayListing = () =>{
//     //const array = ["Apple","orange","banana"];
//     const employeeeInfo = [
//         {id:"1",name:"shoaib",email:"sam@gmail.com"},
//         {id:"2",name:"ali",email:"ali@gmail.com"},
//         {id:"3",name:"amv",email:"amv@gmail.com"},
//     ]
//     // array.map((item)=>{
//     //     console.log("fruit list is", item);
//     // })
//     return(
//         <>
//         <h1>ArrayListing</h1>
//         <table border={1}>
//         <tbody>
//        {
//         //array.map((item,index)=> <h1>{item}</h1> )
//         employeeeInfo.map((emp)=> 
           
//             <tr key={emp.email}>
//                 <td>{emp.id}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.email}</td>
//             </tr>
//         )
//        }
//        </tbody>
//        </table>
//         </>
//     )
// }


// export default ArrayListing;