import {BrowserRouter,Routes,Route,NavLink,Navigate} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Employee from './Employee';
import "./style.css";
// import PageNotFound from './PageNotFound';

const Menu = () =>{
    return(
        <>
        <h1>Menu</h1>
        <BrowserRouter>
        <ul className='nav'>
            <li>
            <NavLink className='nav-link' to="/">Dashboard </NavLink>
            </li>
            <li>
            <NavLink className='nav-link' to="/home">Home </NavLink>
            </li>
            <li>
            <NavLink className='nav-link' to="/about"> About</NavLink>    
            </li>
        </ul>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/employee/:name/:age" element={<Employee/>}/>
                
                {/* <Route path="/*" element={<PageNotFound/>}/> */}
                {/* rediect to desire page */}
                <Route path="/*" element={<Navigate to="/"/>}/>
                
            </Routes>
        </BrowserRouter>
        </>
    )
}


export default Menu;