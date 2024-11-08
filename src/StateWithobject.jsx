import React, { useState } from "react";


const StateWithobject = () =>{
    const [state, setState] = useState({name:"shoaib",age: 20})
    return(
        <>
        <h1> State with object</h1>
        <input type="text" value={state.name} onChange={(e)=> setState({name:e.target.value})} />
        <p>{state.name}</p>
        <input type="text" value={state.age} onChange={(e)=> setState({age:e.target.value})} />
        <p>{state.age}</p>
        </>
    )
}


export default StateWithobject;

// import React, { useState } from "react";

// const StateWithobject =()=>{
//     const  [info,setInfo] = useState({name:"Ali, age: 32"});
//     return(
//         <>
//         <h1>StateWithobject</h1>
//         <h2>{info.name}</h2>
//         <h2>{info.age}</h2>
//         <input type="text" value={info.name} onChange={(e)=> setInfo({...info,name: e.target.value})}/>
//         <input type="text" value={info.age} onChange={(e)=> setInfo({...info,age: e.target.value})}/>
//         </>
//     )
// }


// export default  StateWithobject;