import React from "react";
import seriesData from "../API/seriesData.json";
import SeriesCard from "./SeriesCard";

const NetflixSeries = () =>{
    return(
        <>
        {
            seriesData.map((curElement)=>{
               return <SeriesCard key={curElement.id} data={curElement} />
            })
        }

        </>
    )
}

export default NetflixSeries;