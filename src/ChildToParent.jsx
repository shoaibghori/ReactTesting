import React from "react";

const ChildToParent =(prop)=>{
    // let userName= "Ghori";
    //array
    // let userName = ["email", "shoaib","age"]
    //object
    let userName = {email: "sam@email.com",name: "shoaib", age: 33}
    return(
        <>
        <h1>Child To Parent</h1>
        {/* <p>{prop.item}</p> */}
        
        <button onClick={()=> prop.newItem(userName)}>Click</button>
        </>
    )
}
export default ChildToParent;

// import React from "react";

// const ChildToParent = (props) =>{
//     let user = " Shoaib";
//     return(
//         <>
//         {/* <h2>{props.item}</h2> */}
//         <button onClick={()=> props.item(user)}>Click</button>
//         </>
//     )
// }

// export default ChildToParent;