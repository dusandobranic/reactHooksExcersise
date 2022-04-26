import { useCallback, useEffect, useState } from "react";
import CallbackChild from "./CallbackChild";

const CallbackTutorial = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState('Hello');

    //  const returnData = () => {
    //      return data;
    //  }

    const returnData = useCallback(() => {
        return data;
    }, [data])

    return (
        <>
            <CallbackChild returnData={returnData} />
            <button onClick={() => {
                setToggle(!toggle)
                console.log('click')
            }}>toggle</button>
        </>
    )
}

export default CallbackTutorial;

