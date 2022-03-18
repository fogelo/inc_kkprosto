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

export const AddInputValue = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <>
            <input ref={inputRef} type="text"/>
            <button onClick={() => {
                const el = inputRef.current as HTMLInputElement
                setValue(el.value)
            }}>save
            </button>
            {value}
        </>
    )
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    return <input value={value} onChange={(e) => setValue(e.currentTarget.value)} type="text"/>
}
export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    return <input checked={value} onChange={(e) => setValue(e.currentTarget.checked)} type="checkbox"/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState('2')
    return (
        <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
            <option>none</option>
            <option value="1">minsk</option>
            <option value="2">moscow</option>
            <option value="3">kiev</option>
        </select>
    )
}