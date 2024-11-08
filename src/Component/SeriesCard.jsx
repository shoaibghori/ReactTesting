const SeriesCard = ({data}) =>{
    const {id,imgURL,title,description,genere,watchUrl,rating,cast} = data;
    // const {id,imgURL,title,description,genere,watchUrl,rating,cast} = data;
    const ratingClass= rating >= 8 ? "superHit" : "avg";
    const btnWatch ={
        minWidth: "80px",
        padding: "5px 15px",
        border:"1px solide #ccc",
        backgroundColor: `${rating >= 8 ? "#aaff00" : "#dba801"}`,
        color:"#000",
        textDecoration: "none"
    }
    return(
        <div className="col-lg-4" >
            <div className="bg-light p-3 border">
            <img src={imgURL} alt="banner" className="img-fluid"/>
            <h4><strong>Title:</strong> {title}</h4>
            <p><strong> Desc:</strong> {description}</p>
            <p><strong> ID:</strong> {id}</p>
            <p><strong> Genere:</strong> {genere}</p>
            {/* <p><strong> Rating:</strong><span className={`rating ${rating <=8? "avg" : "superHit"}`}> {rating}</span> </p> */}
            <p><strong> Rating:</strong><span className={`rating ${ratingClass}`}> {rating}</span> </p>
            <p><strong> Cast:</strong> {cast}</p>
            <p><strong> Watch Video: </strong>
             <a href={watchUrl} target="_blank" rel="noreferrer" style={btnWatch}> Watch</a>
              </p>

            </div>
        </div>
    )  
}

export default SeriesCard;