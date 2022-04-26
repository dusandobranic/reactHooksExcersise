import { useRef, useState } from "react";

const RefTutorial = () => {
    const [name, setName] = useState("")
    const inputRef = useRef();

    const changeName = () => {
        console.log(inputRef.current.value)
        const ref = inputRef.current;
        if(ref.value.length > 2) {
            setName(ref.value);
            ref.value = ""
        } else {
            console.log('name need to have atleast 3 chars')
        }       
    }

    return (
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="ex.." ref={inputRef} />
            <button onClick={changeName}> Change Name </button>
        </div>
    );
}

export default RefTutorial;