import { useEffect, useLayoutEffect, useRef, useState } from "react";
import '../App.css'


const LayoutEffectTutorial = () => {
    const divRef = useRef(null);

    useEffect(() => {
        console.log('effect')

        setTimeout(() => {
            divRef.current.classList.remove('layout')
        }, 3000)

    }, [])

    useLayoutEffect(() => {
        divRef.current.classList.add('layout')
        console.log('layout effect')
    }, []);

    return (
        <div className="" ref={divRef}>

        </div>
    );
}

export default LayoutEffectTutorial;