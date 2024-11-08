import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <h1>Home</h1>
        <Link to="/employee/shoaib/30">Shoaib </Link>
        <Link to="/employee/ghori/28"> Ghori</Link>
        
        </>
    )
}

export default Home;