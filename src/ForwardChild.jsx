import React,{forwardRef} from "react";


const ForwardChild = (props,ref) =>{
    return(
        <>
        <h2>Forward Child</h2>
            <input type="text" ref={ref}  />
        </>
    );
}

export default  forwardRef(ForwardChild);