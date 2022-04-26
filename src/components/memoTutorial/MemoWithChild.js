import { useState } from "react";
import MemoChild from "./MemoChild";

const MemoWithChild = () => {
    const [localNum, setLocalNum] = useState(0);
    const [childNum, setChildNum] = useState(0);

    const incrementLocal = () => {
        setLocalNum(localNum + 1)
    }

    return (
        <>
            <div>
                <button onClick={incrementLocal}>Click to Increment</button>
                <h1>Local: {localNum}</h1>
                <MemoChild childNum={childNum} setChildNum={setChildNum}/>
            </div>
        </>
    )
}

export default MemoWithChild;

