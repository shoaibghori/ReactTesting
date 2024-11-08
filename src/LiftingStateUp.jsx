import React from "react";
import ChildToParent from "./ChildToParent";

const LiftingStateUp =()=>{
    // let data = "shoaib";
    function myFun(n){
        alert("recived data from parent " + n.name +" "+ n.email +" "+ n.age);
    }
    return(
        <>
        <h1>Lifting StateUp</h1>
        {/* <ChildToParent item={data}/> */}
        <ChildToParent newItem={myFun}/>
        </>
    )
}
export default LiftingStateUp;


// import React from "react";
// import ChildToParent from "./ChildToParent";

// const LiftingStateUp = () =>{
//     //let data = "Hello";
//     function sendData(n){
//         alert("Hello" + n);
//     }
//     return(
//         <>
//         <h1><ChildToParent item={sendData}/></h1>
//         </>
//     )
// }


// export default LiftingStateUp;