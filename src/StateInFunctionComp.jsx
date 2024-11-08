// import { useState } from "react";

import { useState } from "react";

// function StateInFunctionComp(){
//     const [name, setName] =useState("M.Shoaib");
//     function UpdateName(){
//         setName("Ghori");
//     }
//     return(
//         <>
//             <h2>{name}</h2>
//             <button type="button" onClick={UpdateName}>Click</button>
//         </>
//     )
// }

// export default StateInFunctionComp;

function StateInFunctionComp(){
    const [name, setname]= useState("shoaib");
    
    function updateName(){
        setname("Ghori");
    }
    return(
        <>
        <h1>Hello {name}</h1>
        <button type="button" onClick={ updateName}>Click me</button>
        </>
    )
    }
    
    export default StateInFunctionComp;