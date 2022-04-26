import { useReducer, useState } from "react";

const reducerFunc = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case "DECREMENT":
            return {
                count: state.count - 1,
                showText: state.showText
            }
        case "TOGGLE_SHOW_TEXT":
            return {
                count: state.count, showText: !state.showText
            }
        default:
            return state
    }
}



const ReducerTutorial = () => {
    // const [count, setCount] = useState(0);
    // const [showText, setShowText] = useState(true);
    const [state, dispatch] = useReducer(reducerFunc, { count: 0, showText: false });

    return (
        <>
            <h1>{state.count}</h1>

            <button onClick={() => {
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLE_SHOW_TEXT" })
            }
            }>
                Increment
            </button>
            <button onClick={() => {
                dispatch({ type: "DECREMENT" })
                dispatch({ type: "TOGGLE_SHOW_TEXT" })
            }}>Decrement</button>

            {state.showText && <p> This is a text</p>}
        </>
    );
}

export default ReducerTutorial;