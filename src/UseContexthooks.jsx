import React, { createContext, useState } from "react";
import FirstChild from "./FirstChild";

export const MyData = createContext();

const UseContexthooks = () =>{
    const [count,setCount] =useState(1);
    const [salary,setSalary] = useState(1);
    const getSalary =(val) =>{
        console.log("salary is ", val)
        setSalary(val);
    }
    return(
        <MyData.Provider value={{valueData : count, getSal: getSalary}}>
            <>
            <h2>Use Context Hook With Api {count} and salary from super child {salary}</h2>
            <FirstChild/>
            <button onClick={() => setCount(count+1)}>Submit</button>
            </>
        </MyData.Provider>
        
    )
}

export default UseContexthooks;



// import React, { createContext, useState } from "react";
// import FirstContextChild from "./FirstContextChild";


// export const Mydata =createContext();

// const UseContexthooks = () =>{

//     const [data,setData] = useState(0);
//     const [salary,setSalary] = useState(1);
    

//     const newSalary = (value) =>{
//         console.log("my Salary is",value);
//         setSalary(value);
//     }
//     return(
//         <Mydata.Provider value={{newdData: data, sal: newSalary}}>
//         <>
//             <h2>Use Context hooks {data}</h2>
//             <button onClick={() => setData(data + 1)}>Click</button>
//             <h2>Salary is {salary}</h2>
            
//             <FirstContextChild/>
//         </>
//         </Mydata.Provider>
//     )
// }

// export default UseContexthooks;