import React, { useEffect } from "react";

function UseEffectProps(props){
    useEffect(()=>{
        console.log("use Effect", props)
    })
    return(
        <>
        <h1>Count is {props.data}</h1>
        </>
    )
}

export default UseEffectProps;

// import React, { useEffect } from "react";

// function UseEffectProps(props){

//     useEffect(()=>{
//         console.log("use effect with props" , props);
//     })
//     return(
//         <>
//         <h1>useeffectwithProps {props.data}</h1>
//         </>
//     )
// }


// export default UseEffectProps;