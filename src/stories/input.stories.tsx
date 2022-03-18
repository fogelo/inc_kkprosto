import {useRef, useState} from 'react';

export default {
    title: 'input',
    // component:
}

export const UncontrolledInput = () => {
    return (
        <input type="text"/>
    )
}
export const ControlledInput = () => {
    return (
        <input value={'hard'} type="text"/>
    )
}

export const AddInputValue = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <input ref={inputRef} type="text"/>
            <button onClick={() => {
                const el = inputRef.current as  HTMLInputElement
                setValue(el.value)
            }}>save
            </button>
            {value}
        </>
    )
}