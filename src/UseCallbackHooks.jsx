import React, { useCallback, useState } from "react";
import ExampleUseCallbackHooks from "./ExampleUseCallbackHooks";

const UseCallbackHooks = () =>{
    const [count, setCount] = useState(0);
    const [item, setitem] = useState(2);
    const newData= useCallback(() =>{
        console.log("i ma  a data function",item)
    },[item])
    return(
        <>
            <h2>Use Callback Hooks {count}</h2>
            <h2>Use Callback Hooks {item}</h2>
            <button type="button" onClick={()=> setCount(count + 1)}>count</button>
            <ExampleUseCallbackHooks item={item} data={newData}/>
            <button type="button" onClick={()=> setitem(count * 2)}>item</button>

        </>
    )
}


export default UseCallbackHooks;