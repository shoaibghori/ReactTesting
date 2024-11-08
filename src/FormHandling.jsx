import React, { useState } from "react";


function FormHandling(){
    const[text,getText] =useState("");
    const[opt,getOpt] =useState("");
    const[chk,getChk] =useState(false);
    const[print,setPrint] =useState(false);

    function getFormData(e){
        e.preventDefault();
        
    }
    return(
        <>
        
        <form style={{margin: "60px auto 0", width: "400px"}} onSubmit={getFormData}>
            <h1>Form Handling</h1>
           {print ? <p>Name:{text}, Option is:{opt}, and chkbox is {chk ? <span>Check</span> : <span>Not Check</span>} </p> : null} 
            <input type="text" onChange={(e) => getText(e.target.value)}/>
            <br/>
            <select  onChange={(e) => getOpt(e.target.value)}>
                <option>Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            <br/>
            <input type="checkbox"  onChange={(e) => getChk(e.target.checked)}></input>
            
            <br/>
            <button onClick={() => setPrint(true)}>Submit</button>
        </form>
        </>
    )
}


export default FormHandling;


// import React, { useState } from "react";

// function FormHandling(){
//     const [name, setName] = useState("");
//     const [opt, setOpt] = useState("");
//     const [chk, setChk] = useState("");
//     const [print, setPrint] = useState(false);

//     function changeVal(e){
//         console.log(name, opt, chk);
//         e.preventDefault();
//     }
//     return(
//         <>
//         <h3>Form Handling</h3>
//         {
//             print ? <span>{name} {opt} {chk}</span>: null
//         } 

//         <form onSubmit={changeVal}>
//             <input type="text" onChange={(e)=> setName(e.target.value)}/><br/>
//             <select onChange={(e)=> setOpt(e.target.value)}>
//                 <option>Select Option</option>
//                 <option>A</option>
//                 <option>B</option>
//                 <option>C</option>
//             </select>
//             <br/>
//             <input type="checkbox"  onChange={(e)=> setChk(e.target.checked)}/>
//             <button type="subimt"onClick={() => setPrint(true)}>Submit</button>
//         </form>
//         </>
//     )
// }

// export default FormHandling;



// import React, { useState } from "react";

// function FormHandling(){
//     const [name,setName] =useState("");
//     const [opt,setOpt] =useState("");
//     const [chk,setChk] =useState("");
    
    
//     function getFormData(e){
//         e.preventDefault();
//         console.log(name,opt,chk);
//     }
    
//     return(
//         <>
//             <h2>Form Handling</h2>
//             <form onSubmit={getFormData}>
//                 {
//                     name ? <p>{name}{opt}{chk}</p> : null
//                 }
//             <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
//             <br/>
//             <select onChange={(e) => setOpt(e.target.value)}>
//                 <option>Select any option</option>
//                 <option>A</option>
//                 <option>B</option>
//                 <option>C</option>
//             </select>
//             <br/>
//             <input type="checkbox" onChange={(e) => setChk(e.target.checked)} />
//             <br/>

//             <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// export default FormHandling;