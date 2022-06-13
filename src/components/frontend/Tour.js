import React, { useState } from "react";

const Tour = () => {

    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        setCounter(counter + 1);
    }
    return(
        <div style={{'margin-top':300 }}>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>Tap</button>    
        </div>

    )
}
export default Tour;