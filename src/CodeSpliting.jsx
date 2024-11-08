import React, { Suspense } from "react";

const LazyLoading =React.lazy(()=> import('./LazyLoading'));

const CodeSpiliting = () =>{
    return(
        <Suspense fallback={<h3>Wait......</h3>}>
            
            <LazyLoading/>
        </Suspense>
    )
}

export default CodeSpiliting;