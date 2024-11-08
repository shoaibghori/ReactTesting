import React, { useState } from "react";


function HideShowToggle(){
    const [hide,setHide] = useState(false);
    return(
        <>
        {hide ? <p>Hide</p> : <p>Show</p> }
        {/* <button onClick={() => setHide(false)}>Hide</button>
        <button onClick={() => setHide(true)}>Show</button> */}
        <button onClick={() => setHide(!hide)}>Togggle</button>
        </>
    )
}


export default HideShowToggle;



// import React, { useState } from "react";



// function HideShowToggle(){
//     const [result,setResult] = useState(true);

//     return(
//         <>
//         {
//             result  ? <h1>Hello</h1> : null
//         }
            
//             {/* <button onClick={() => setResult(true)}>Show</button>
//             <button onClick={() => setResult(false)}>Hide</button> */}
//              <button onClick={() => setResult(!result)}>Toggle</button>
//         </>
//     )
// }

// export default HideShowToggle;




// import React ,{ useState } from "react";

// function HideShowToggle(){
//     const [result, setShow] = useState(false); //true faslse for hide and show

   
//     return(
//         <>
//          <p>Status: {result}</p>
//          {
//             result ? <h1>Hello</h1> :  null
//          }      
//             {/* <button onClick={() => setShow(true)}>Show</button>
//             <button onClick={() => setShow(false)}>Hide</button> */}
//             <button onClick={() => setShow(!result)}>Toggle</button>
//         </>
//     )
// }

// export default HideShowToggle;