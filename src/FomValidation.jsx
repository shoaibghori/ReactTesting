import React, { useState } from "react";

function FormValidation(){
    const [userName, setUsername] = useState("");
    const [userPas, setUserPas] = useState("");
    const [Errname, setErrorname] = useState(false);
    const [Errpass, setPass] = useState(false);

    function submitForm(e){
        if(userName.length  < 3 || userPas.length < 5){
            alert("Fill full requirement");
        }
         else{
            console.log(userName,userPas);
            alert("Thanks");
        }
        e.preventDefault();
    }
    function userData(e){
        console.log(e.target.value);
        let element = e.target.value;
        if(element.length > 3) {
            setErrorname(true);
        }
        else{
            setErrorname(false);
        }
        setUsername(element);
    }

    function passWord(e){
        console.log(e.target.value);
        let element = e.target.value;
        if(element.length < 5) {
            setPass(true);
        }
        else{
            setPass(false);
        }
        setUserPas(element);

    }

    return(
        <>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="username" onChange={userData} />
                <br/>
                <p>{Errname ? <span>Minimum 3 letter</span> : <span></span>}</p>
                <input type="text" placeholder="pasword"  onChange={passWord}/>
                <p>{Errpass ? <span>Minimum 5 letter</span> : <span></span>}</p>
                <br/>
                <button>submit</button>
            </form>
        </>
    )
}

export default FormValidation;


// import React, {useState} from "react";

// function FormValidation(){
//     const [email,setEmail] = useState("");
//     const [password,setPass] = useState("");
//     const [emailErr,setEmailErr] = useState(false);
//     const [passErr,setpassErr] = useState(false);
    
//     function loginForm(e){
//         if(email.length < 3 || password.length < 5){
//             alert("Fill full requirement");
//         }
//         else{
//             console.log(email,password);
//             alert("Thanks");
//         }
//         e.preventDefault();
//     }
//     function EmailHandler(e){
//        let element = e.target.value;
//        if(element.length < 3){
//         setEmailErr(true)
//        }
//        else{
//         setEmailErr(false)
//        }
//        setEmail(element);
//     }
//     function PassHandler(e){
//         let element = e.target.value;
//        if(element.length < 5){
//         setpassErr(true)
//        }
//        else{
//         setpassErr(false)
//        }
//        setPass(element);
//     }
//     return(
//         <>
//             <h2>Form</h2>
//             <form onSubmit={loginForm}>
//                 <input type="text" placeholder="Enter Email" onChange={EmailHandler} ></input><br/>
//                 <p>{emailErr ? <span>Minimum 3 letter</span> : <span></span>}</p>
//                 <input type="password" placeholder="Enter Password" onChange={PassHandler} ></input><br/>
//                 <p>{passErr ? <span>Minimum 5 letter</span> : <span></span>}</p>
//                 <button>Submit</button>
//             </form>
//         </>
//     )
// }
// export default FormValidation;




// import React, { useState } from "react";

// function FormValidation(){
//     const [Email, setEmail] =useState("");
//     const [Passw, setPassw] =useState("");
//     const [Err, setErr] =useState(false);
//     const [PassErr, setPassErr] =useState(false);

//     function LoginForm(e){
//         if(Email.length < 3  || Passw.length < 5){
//             alert("Fill correct password");
//         }
//         else{
//             console.log(Email, Passw);
//             alert("Thanks")
//         }
//         e.preventDefault();
//     }

//     function ChangeEmail(e){
//         let  element = e.target.value;
//         if(element.length < 3){
//             setErr(true)
//         }
//         else{
//             setErr(false)
//         }
//         setEmail(element);
//     }
//     function Changepass(e){
//         let element = e.target.value;
//         if(element.length < 5){
//             setPassErr(true)
//         }
//         else{
//             setPassErr(false)
//         }
//         setPassw(element);

//     }

//     return(
//         <>
//             <h2>Form Validation</h2>
//             <form onSubmit={LoginForm}>
//             <input type="text" placeholder="Enter email" onChange={ChangeEmail}></input><br/>
//             <p>{ Err ? <span>Minimum 3 letter required</span> : null}</p>
//             <input type="password" placeholder="Enter password"onChange={Changepass}></input><br/>
//             <p>{ PassErr ? <span>Minimum 5 letter required</span> : null}</p>
//             <button>Submit</button>
//             </form>
//         </>
//     )
// }

// export default FormValidation;