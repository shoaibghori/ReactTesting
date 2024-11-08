import HOC from "./HOC";


const OnClick = (value,increment) =>{
   
    return(
        <>
       <h1>on Click{value.value}</h1>
        <button onClick={()=> {value.increment()}}>Click</button>
        </>
    )
}
export default HOC(OnClick);


// import HOC from "./HOC";
// const OnClick = (value,increment) =>{
//     return(
//         <>
//         <h1>On OnClick {value.value}</h1>
//         <button onClick={()=> {value.increment()}}>on Click</button>
//         </>
//     )
// }

// export default HOC(OnClick);


// import React from "react";
// import HOC from "./HOC";

// const OnClick = ({value, increment}) =>{
//     return(
//         <>
//         <h1>on Click{value}</h1>
//         <button onClick={increment}>onClick</button>
//         </>
//     )
// }
// export default HOC(OnClick);