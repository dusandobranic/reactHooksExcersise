import { useEffect, useState} from "react";

 const CallbackChild = (props) => {

    useEffect(() => {
        console.log('function was called')
    }, [props.returnData])
    

    return (
        <>
            <div>{props.returnData()}</div>
        </>
    )
}

export default CallbackChild;

