import React from "react";


const PropsInjsx =()=>{
    return(
        <>
            <ProfileCard
            name="shoaib"
            age={30}
            desc="FrontEnd Developer"
            greeting={<strong>Wleome to new job</strong>}
            >
                <h1 style={{background: "red", color: "white"}}>That is jsx Between tag getting thorugh props as a children</h1>
                <p>working fine</p>
            </ProfileCard>
        </>
    )
}
export default PropsInjsx;


function ProfileCard(props){
    return(
        <>
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
        <span>Desc: {props.desc}</span>
        <div>Greeting: {props.greeting}</div>
        <div>Greeting: {props.children}</div>
        </>
    )
}