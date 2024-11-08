import React, { useState } from "react";

function Hooks(){
    const [name, setName] = useState("Shoaib");
    return(
        <>
        <h1>Hooks {name}</h1>
 <button type="button" onClick={() => setName("Ghori")}>Click</button>
        </>
    )
}

export default Hooks;