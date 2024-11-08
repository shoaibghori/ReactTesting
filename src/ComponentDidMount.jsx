import { Component } from "react";

class ComponentDidMount extends Component{
    constructor(){
        super();
        console.log("constructor mount");
        this.state={
            name: "Shoaib"
        }
    }
    componentDidMount(){
        console.log("component mount");

    }
    render(){
        console.log("render mount")
        return(
            <>
            <h1>{this.state.name}Component Did Mount</h1>
          <button onClick={()=>{this.setState({name: "Hello"})}}>Click</button>
             </>
        )
    }
}

export default ComponentDidMount;