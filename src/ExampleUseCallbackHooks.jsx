import React, { memo } from "react";

const ExampleUseCallbackHooks = (props) =>{
    console.log(props)
return(
    <>
    <h1>Example Use Callback Hooks{props.item}</h1>
    </>
)
}

export default memo(ExampleUseCallbackHooks);