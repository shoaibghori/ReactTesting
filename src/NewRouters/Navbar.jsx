import React from "react";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Home from "../NewRouters/Home";
import About from "../NewRouters/About";
import MenuLink from "./Menu";
import Contact from "./Contact";


const Navbar = () => {

return(
    <>
    <h1>Navbar Route</h1>
    <BrowserRouter>
        <MenuLink/>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/*" element={<NotFound/>}/>*/}
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<Navigate to="/Home"/>}/>
        </Routes>
    </BrowserRouter>
    </>
)
}

export default Navbar;