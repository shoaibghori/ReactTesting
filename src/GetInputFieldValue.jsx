import React, { useState } from "react";


function GetInputFieldValue(){
    const [data,setData] = useState("");
    const [print,setPrint] = useState(false);

    function changeVal(e){
        setData(e.target.value);
        setPrint(false);

    }
    return(
        <>
        <h1>Form</h1>
        {print ? <p>{data}</p> : null}
        <input type="text" onChange={changeVal} />
        <button onClick={()=> setPrint(true)}>Submit</button>
        </>
    )
}
export default GetInputFieldValue;





// import React, { useState } from "react";

// function GetInputFieldValue(){
//     const [data, setData] = useState("");
//     const [print,setPrint] =useState(false);
//     function changeVal(val){
//         console.log(val.target.value);
//         setData(val.target.value);
//         setPrint(false);
//     }
//     return(
//         <>
//             <h2>Form</h2>
//             {
//             print ?  <p>{data}</p> : null
//             }
//             <input type="text" onChange={changeVal} />
//             <button onClick={() => setPrint(true)}>Click</button>
//         </>
//     )
// }
// export default GetInputFieldValue;



// import React, { useState } from "react";

// function GetInputFieldValue(){
//     const [data, setData] = useState("");
//     const [print, setPrint] = useState(false);

//     function updateData(val){
//         setData(val.target.value);
//         setPrint(false);
//     }
//     function submitData(){
//         setPrint(true)
//     }
//     return(
//         <>
//         <h1>Form</h1>
//         {
//             print ?  <p>Data is: {data}</p> : null
//         }
//         <input type="text" onChange={updateData} />
//         <button onClick={() => submitData()}>Submit</button>
//         </>
//     )
// }

// export default GetInputFieldValue;



// import React, { useState } from "react";

// function GetInputFieldValue(){

//     const [oldData,UpdateData] = useState("");
//     const [print,setPrint] = useState(false);

//     function getValue(val){
//         // console.log(val.target.value); 
//         UpdateData(val.target.value);
//         setPrint(false);
      
//     }
//     // function SubmitData(val){
//     //     UpdateData(val.target.value);
//     // }
   
//     return(
//         <>
//         <h2>Form</h2>
//         {
//             print ? <h2>{oldData}</h2> : null
//         }
//         <input type="text" onChange={getValue} />
//         <button onClick={() => setPrint(true)}>Click</button>
//         </>
//     )
// }
// export default GetInputFieldValue;