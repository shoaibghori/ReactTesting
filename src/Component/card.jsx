import React from "react";
import NetflixSeries from "./NetflixSeries";


const Card = () =>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mb-4">
                    Add Menu here
                </div>
            </div>
            <div className="row">
                    <NetflixSeries/>
            </div>
        </div>
        
        </>
    )
}

export default Card;