import React, {Component} from "react";

class ShouldComponentUpdateMethod extends Component{

    constructor(){
        super();
        console.log("construtor here");
        this.state= {
            count :0
        }
    }
    shouldComponentUpdate(){
        console.log("should comp update", this.state.count)
        // return true;
        if(this.state.count > 5 && this.state.count <10){
            return true;
        }
        else{
            return false;

        }
    }
    render(){
        console.log("render here");
        return(
            <>
            <h1>Should Coponent Updae Method count is  {this.state.count}</h1>
            <button onClick={() => {this.setState({count:this.state.count + 1})}}>Click</button>
            </>
        )
    }
}

export default ShouldComponentUpdateMethod;
// import React, { Component } from "react";

// class ShouldComponentUpdateMethod extends Component{
//     constructor(){
//         super();
//         this.state= {
//             count: 0
//         }
//     }
//     shouldComponentUpdate(){
//         console.log("should  Component Update Method", this.state.count);
//         return true;
//     }
//     render(){
//         return(
//             <>
//             <h2>Component Should Mount</h2>
//             <p>{this.state.count}</p>
//             <button onClick={() => {this.setState({count: this.state.count + 1})}}>Click</button>
//             </>
//         )
//     }
// }

// export default ShouldComponentUpdateMethod;