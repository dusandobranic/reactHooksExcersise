import {memo} from 'react';

const MemoChild = (props) => {

    const changeNumber = () => {
        props.setChildNum(Math.random())
    }

    console.log('child rendered')

    return (
        <>
            <div>
                <h1>Child: {props.childNum}</h1>
                <button onClick={changeNumber}> Click to change child</button>
            </div>
        </>
    )
}

export default memo(MemoChild);

