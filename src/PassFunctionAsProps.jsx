import React from "react";


function PassFunctionAsProps(props){
    return(
        <>
            <h1>Pass Function as a props</h1>
            <button onClick={() => props.data()}>Click</button>
        </>
    )
}


export default PassFunctionAsProps;
