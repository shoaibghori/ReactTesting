 import React, { useState } from 'react';

 const HOC  = (OldComponent) =>{
    const NewComponent = () =>{
        const [value,setVlaue] = useState(0);
            const increment = () => {
                setVlaue(value + 1);
            }
        return <OldComponent value={value} increment={increment}/>
        }
    return NewComponent;
 }

 export default HOC;

// const HOC = (OldComponent) =>{
//     const NewComponent = () =>{
//         const [value,setVlaue]= useState(0);
//         const increment = () => {
//             setVlaue(value + 1);
//         }
//         return <OldComponent value={value} increment={increment}/>
//     }
//    return NewComponent;
    
// }

// export default HOC;


// import React, { useState } from "react";

// const HOC = (OldComponent) =>{
//     const NewComponent = () => {
//         const [value, setVlaue] = useState(0);

//         const Increment = () =>{
//             setVlaue(value + 1);
//         }
//         return <OldComponent value={value} increment={Increment}/>
//     }
//     return NewComponent;
// }

// export default HOC;