import React, {PureComponent } from "react";

class Pure extends PureComponent{
    // constructor(){
    //     super();
    //     this.state = {count:0};
    // }
    render(){
        console.log("re-render")
        return(
            <>
            <h1>{this.props.count}</h1>
            {/* <button onClick={()=> this.setState({count: this.state.count + 1})}>Click</button> */}
            </>
        )
    }
}


export default Pure;