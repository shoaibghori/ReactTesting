import { Component } from "react";

// class StateInClassComp extends Component{
//     constructor(){
//         super();
//         this.state={
//             // name : "State l in Class Component using constructor"
//             name : 0
//         }
//     }
//     updateData(){
//         // alert ("Data Update");
//         this.setState({
//             // name: "Update data using set State in class component"
//             name: this.state.name+1
//         })
//     }
//     render(){
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={() => this.updateData()}>Update</button>
//             </>
//         )
//     }
// }

// export default StateInClassComp;




// class SetStateInComp extends Component{
//     constructor(){
//         super();
//         this.state ={
//             name: "Before update data"
//         }
//     }
//     updateData(){
//         this.setState({
//             name: "Data is update"
//         })
//     }

//     render(){
//         return(
//             <>
//             <h1>{this.state.name}</h1>
//             <button onClick={()=>this.updateData()}>Update Me</button>
//             </>
//         )
//     }
// }
// export default SetStateInComp;

class SetStateInComp extends Component{
    constructor(){
        super();
        this.state = {
            FirstName: "Shoaib",
            LastName: "Ghori",
        }
    }

    updateName(){
        this.setState({FirstName:"Sho"});
        this.setState({LastName:"gho"});
    }
    render(){
        return(
            <>
            <h1>My FirstName is {this.state.FirstName} and LastName is {this.state.LastName}</h1>
            <button type="button" onClick={()=>{this.updateName()}}>Click</button>
            </>
        )
    }
}
export default SetStateInComp;

// class SetStateInComp extends Component{
//     constructor(){
//        super();
//         this.state = {
//             name: "Shoaib"
//         }
//     }
//     updateFun() {
//         // alert("ghori"); 
//         this.setState({name:  "Ali"})
//     }
//     render(){
//         return(
//             <>
//             <h1>Hello {this.state.name}</h1>
//             <button type="button" onClick={()=> this.updateFun()}>Click</button>
//             </>
//         )
//     }
// }

// export default SetStateInComp; 