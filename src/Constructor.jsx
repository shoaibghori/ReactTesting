import React, { Component } from "react";


class Constructor extends Component{
    //Super;
    constructor(){
        super();
        this.state={
            name: "shoaib"
        }
        console.log("I am a constructor")
    }
        componentDidMount(){
            console.log("I am a comp Did Mount")            
        }
    render(){
        console.log("I am a render")
        return(
            <>
            <h1>Constructor is {this.state.name}</h1>
            <button onClick={() => this.setState({name:"ghori"})}>Set State</button>

            </>
        )
    }
}



export default Constructor;
// import React, { Component } from "react";

// class Constructor extends Component{
//     constructor(){
//         super();
//         // console.log("constructor")
        
//         this.state = {
//             name: "shoaib"
//         }
//     }
//     render(){
//         // console.log("render")
//         return(
//             <>
//             <h1>{this.state.name} Life cycle Constructor In React</h1>
//             </>
//         )   
//     }
// }

// export default Constructor;