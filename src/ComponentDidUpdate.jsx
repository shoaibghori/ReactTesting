import React,{Component} from "react";


class ComponentDidUpdate extends Component{
    constructor(){
        super();
        this.state={
            count :0
        }
    }
    componentDidUpdate(prevProps,PrevState,Snapshot){
        console.log("I am a Componnent Did Update", PrevState.count, this.state.count);
        // if(PrevState.count === this.state.count){
        //     alert("count is equal")
        // }
        if(this.state.count < 5){
            this.setState({count: this.state.count+1})
        }
    }
    render(){
        return(
            <>
            <h1>Component Did Mount {this.state.count}</h1>
            <button onClick={() => {this.setState({count: 1})}}>Update Component</button>
            </>
        )
    }
}

export default ComponentDidUpdate;


// import React,{ Component } from "react";

// class ComponentDidUpdate extends Component{
//     constructor(){
//         super();
//         // console.log("Constructor")
//         this.state ={
//             count: 0
//         }
//     }

//     componentDidUpdate(prevProps, prevState,Snapshot){
//        console.log("comp did mount", prevState.count, this.state.count)
//         if(this.state.count < 5){
//             this.setState({count: this.state.count +1})
//         }
//     }

//     render(){
//         // console.log("render")

//         return(
//             <>
//             <h1>Component Did Update</h1>
//             <p>{this.state.count}</p>
//             <button onClick={ () => this.setState({count:1})}>Click</button>
//             </>
//         )
//     }
// }
// export default ComponentDidUpdate;