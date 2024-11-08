import React, { useEffect, useState } from "react";

const UseEffectWithCondition = ()=>{
    const [age,setAge] = useState(20);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("use Effect is call")
    },[count])
    return(
        <>
        <>use Effect with condition</>
        <p>{age}</p>
        <p>{count}</p>
        <button onClick={()=> setAge(age+1)}>Set Age</button>
        <button onClick={()=> setCount(count+1)}>Set count</button>
        </>
    )
}


export default UseEffectWithCondition;

// import React, { useEffect, useState } from "react";

// const  UseEffectWithCondition = () =>{
//     const [age,setAge] = useState(22);
//     const [count,setCount] = useState(10);
//     useEffect(()=>{
//         console.log("use Effect Working");
//     },[count]);
//     return(
//         <>
//         <h1>{age}</h1>
//         <button onClick={()=> setAge(age +1)}>Add age</button>
//         <h1>{count}</h1>
//         <button onClick={()=> setCount(count +1)}>Add count</button>
//         </>
//     )
// }


// export default UseEffectWithCondition;