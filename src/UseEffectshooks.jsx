import React, { useEffect, useState } from "react";

function UseEffectsHooks(){
    const [count, setCount] = useState(0);


    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count + 1);
        },1000);
    },[])

    return(
        <>
        <h1>Use Effects Hooks {count}</h1>
         <button type="button" onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UseEffectsHooks;