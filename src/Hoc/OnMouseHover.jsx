import HOC from "./HOC";


const OnMouseHover = (value,increment) =>{
   
    return(
        <>
        <h1>on Click{value.value}</h1>
        <button onMouseOver={()=> {value.increment()}}>on Mouse Hover</button>
        </>
    )
}
export default HOC(OnMouseHover);

// import HOC from "./HOC";
// const OnMouseHover = (value,increment) =>{
//     return(
//         <>
//         <h1>On mouseover{value.value}</h1>
//         <button onMouseOver={()=> {value.increment()}}>on Mouse Hover</button>
//         </>
//     )
// }

// export default HOC(OnMouseHover);



// import React from "react";
// import HOC from "./HOC";

// const OnMouseHover = ({value, increment}) =>{
//     return(
//         <>
//         <h1>on Click{value}</h1>
//         <button onMouseOver={increment}>OnMouseHover</button>
//         </>
//     )
// }
// export default HOC(OnMouseHover);