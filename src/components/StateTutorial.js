import { useState } from "react";

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);

    const [inputValue, setInputValue] = useState("");

    return (
        <>
        <div>{counter}</div>

        <button onClick={() => setCounter(counter + 1)}>
            increment 
        </button>

        <input placeholder="enter value" name="inputValue" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <p>{inputValue}</p>
        </>
    );
}

export default StateTutorial;