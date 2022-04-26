import { useRef } from "react";
import ChildButton from "./ChildButton";


const ImperativeHandle = () => {
    const buttonRef = useRef(null);


    return (
        <div>
            <button onClick={() => { buttonRef.current.alterToggle() }}>Button from parent</button>
            <ChildButton ref={buttonRef} />
        </div>
    );
}

export default ImperativeHandle;