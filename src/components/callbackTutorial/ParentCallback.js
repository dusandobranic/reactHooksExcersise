import React, { useState, useCallback } from 'react';

export default function ParentCallback() {
    const [value, setValue] = useState('');
    const [preview, setPreview] = useState('__');
    const [number, setNumber] = useState(2);

    const valueChange = useCallback(
        (e) => {
             const { value } = e.target;
             setValue(value);
             setPreview(`${value}__${number}`);
        },
        [number],
    )

    const numberChange = useCallback(
        (e) => {
            const { value: value1 } = e.target;
            setNumber(parseInt(value1));
            setPreview(`${value}__${value1}`);
        },
        [value],
    );

    return (
        <div>
            <div>
                <div>
                    <input type="text" onChange={valueChange} value={value} />
                </div>
                <div>
                    <input type="number" value={number} onChange={numberChange} />
                </div>
            </div>
            <div>
                <p>res:</p>
                <code>{preview}</code>
            </div>
        </div>
    )
}