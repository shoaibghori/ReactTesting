// import Variable from "./variable";
// import ClassComponent from "./ClassComponent";
// import FuncComp from "./FuncComponent";
// import ClickEvent from "./ClickEvent";
// import StateInClassComp from "./StateInClassComp";
// import StateInFunctionComp from "./StateInFunctionComp";
// import PropsInFuncComp from "./PropsInFuncComp";
//  import GetInputFieldValue from "./GetInputFieldValue";
// import { useState } from "react";
// import PropsInClassComp from "./PropsInClassComp";
// import HideShowToggle from "./HideShowToggle";
// import PassFunctionAsProps from "./PassFunctionAsProps";
// import ConditionalRendring from "./ConditionalRendring";
// import FormHandling from "./FormHandling";
// import FormValidation from "./FomValidation";

// import Constructor from "./Constructor";
// import ComponentDidMount from "./ComponentDidMount";
// import ComponentDidUpdate from "./ComponentDidUpdate";
// import ShouldComponentUpdateMethod from "./ShouldComponentUpdateMethod";

// import { useState } from "react";
// import UseEffectProps from "./UseEffectProps";
// import UseEffectWithCondition from "./UseEffectWithCondition";

// import Hooks from "./Hooks";
// import UseEffectsHooks from "./UseEffectshooks";
// import UseMemoHooks from "./UseMemoHooks";
// import UseContexthooks from "./UseContexthooks";
// import UseCallbackHooks from "./UseCallbackHooks";
// import UseRef from "./UseRef";
// import ForwardRef from "./ForwardRef";

// import Reuse from "./Reuse";

// import ArrayListing from "./ArrayListing";
// import LiftingStateUp from "./LiftingStateUp";

// import StateWithobject from "./StateWithobject";
// import CodeSpiliting from "./CodeSpliting";

// import APICalling from "./APICalling";
// import PostApiMethod from "./PostApiMethod";
// import DeleteApiMethod from "./DeleteApiMethod";
// import PreFilledFormData from "./PreFilledFormData";


// import Routers from "./MasterRouters/Home";
// import Navbar from "./NewRouters/Navbar";


// import Deletejson from "./Deletejson";


// import OnClick from "./Hoc/OnClick";
// import OnMouseHover from "./Hoc/OnMouseHover";

// import BootstrapArrayListing from "./BootstrapArrayListing";
// import NestedlistWithNestedArray from "./NestedlistWithNestedArray";

// import { Component } from "react";
// import Pure from "./Pure";

// import PutApiMethod from "./PutApiMethod";

// import Card from "./Component/card";
// import Menu from "./MasterRouters/Menu";
// import PropsInjsx from "./propsInjsx";

//create bootstrap website
import "./App.css";
import About from "./Component/about";
import Blog from "./Component/blog";
import Contact from "./Component/contact";
import Footer from "./Component/footer";

import Appheader from "./Component/header";
import Hero from "./Component/hero";
import Pricing from "./Component/pricing";
import Services from "./Component/services";
import Teams from "./Component/teams";
import Testimonials from "./Component/testimonials";
import Works from "./Component/works";
//create bootstrap website

import "./stylesheet.css";
// import Button from 'react-bootstrap/Button';


function App() {
//  class App extends Component{
  // const [FirstName, SetFirstName] = useState("Shoaib");
  // function UpdateName(){
  //   return SetFirstName("Ghori");
  // }

  // function updateData(){
  //   alert("Hello props  from parent component")
  // }

  // const [count,setCount]= useState(0);

  //   constructor(){
  //     super();
  //     this.state = {count:0};
  // }
// render(){
    return (
    <>
    {/* <Variable/> */}
  {/* <FuncComp/>
  <ClassComponent/> */}
  {/* <ClickEvent/> */}
  {/* <StateInFunctionComp/> */}
  {/* <StateInClassComp/> */}
  {/* <PropsInFuncComp name={"Ali"}/> */}
  {/* <PropsInClassComp name = {"M Shoaib"} age = {30}/> */}
  {/* <button onClick={() => SetFirstName("Shoaib Ghori")}>Click</button> */}
 {/* <GetInputFieldValue/>  */}
  {/* <HideShowToggle/> */}
  {/* <FormHandling/> */}
  {/* <ConditionalRendring/> */}
  {/* <PassFunctionAsProps data={updateData}/> */}
  {/* <FormValidation/> */}
  {/* <Constructor/> */}
  {/* <ComponentDidMount/> */}
  {/* <ComponentDidUpdate/> */}
  {/* <ShouldComponentUpdateMethod/> */}
  
  {/* <Hooks/> */}
  {/* <UseEffectsHooks/> */}
  
  {/* <UseEffectProps data={count}/>
  <button type="button" onClick={ () => setCount(count + 1)}>Click</button>  */}
  
   {/* <UseEffectWithCondition/> */}
  {/* <Pure count={this.state.count}/>
  <button onClick={()=> this.setState({count: + 1})}>Click</button> */}
  {/* <UseMemoHooks/> */}
  {/* <UseCallbackHooks/> */}
{/* <UseContexthooks/> */}
{/* <UseRef/> */}
{/* <ForwardRef/> */}
{/* <ArrayListing/> */}
{/* <BootstrapArrayListing/> */}
    {/* <NestedlistWithNestedArray/> */}
    {/* <Reuse/> */}
    {/* <LiftingStateUp/> */}
    {/* <OnClick/>
    <OnMouseHover/> */}
   {/* <StateWithobject/> */}
   {/* <CodeSpiliting/> */}
   {/* <APICalling/> */}
   {/* <PostApiMethod/> */}
   {/* <DeleteApiMethod/> */}
   {/* <PreFilledFormData/> */}
   {/* <PutApiMethod/> */}
   {/* <Deletejson/> */}
      {/* <Routers/> */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <Navbar/> */}
    {/* <Menu/> */}
    {/* <Card/> */}
    {/* <PropsInjsx/> */}

    {/* Create Bootstrap website */}
    <div className="App">
      <header id="header">
        <Appheader/>
      </header>
      <main>
          <Hero/>
          <About/>
          <Services/>
          <Works/>
          <Teams/>
          <Testimonials/>
          <Pricing/>
          <Blog/>
          <Contact/>
       </main>
       <div id="footer">
          <Footer/>
       </div>
       
    </div>
    

    </>

);
}
// }
export default App;
