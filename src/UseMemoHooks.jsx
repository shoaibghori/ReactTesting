import React, { useMemo, useState } from "react";

const UseMemoHooks = () =>{
    const [count, setCount]= useState(0);
    const [data, setData]= useState(2);

    
    const useMemoHooks = useMemo(function Multi(){
        console.log("calling function");
        return count * 2;
      },[count]);
    
    return(
        <>
        <h1>Use Memo Hooks</h1>
        
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Update Count</button>
        <p>{data}</p>
        <button onClick={()=>{setData(data*2)}}>Update Datat</button>
        <h2>{useMemoHooks}</h2>
        </>
    )
}


export default UseMemoHooks;

// import React, { useMemo, useState } from "react";

// const UseMemoHooks = () =>{

//     const [count,setCount] = useState(0);
//     const [date,setDate] = useState(10);

//     const usememoHoks = useMemo(function Multi(){
//         console.log("calling")
//         return count * 2;
//     },[count])


//     // function Multi(){
//     //     console.log("calling")
//     //     return count * 2;
//     // }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=> setCount(count + 1)}>Add Number</button>
//         <h1>{date}</h1>
//         <button onClick={()=> setDate(date * 2)}>Add Date</button>
//         <h3>{usememoHoks}</h3>
//         </>
//     )
// }
//export default UseMemoHooks;