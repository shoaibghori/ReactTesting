import React, { useState } from "react";

function ConditionalRendring(){
    //const [vote,setVote] =useState(true);
    const [age,setAge] =useState(18);

return(
        <div>
            {/* {vote ? <h2>You can vote</h2> : <h2>You canot vote</h2>} */}
            {age === 17 ?  <h2>age is less then 18</h2> : age === 18 ? <h2>Age is 18 eligble 4 vote </h2>
             : age >= 19 ? <h2>greater then 18 </h2>
             : <h2>Age is 18 eligble 4 vote </h2>}
        </div>
        
)
}

export default ConditionalRendring;