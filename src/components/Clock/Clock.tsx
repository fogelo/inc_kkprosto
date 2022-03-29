import {useEffect, useState} from 'react';

const getTwoDigitString = (number: number) => {
    return number < 10 ? '0' + number : number
}

export const Clock = (props: any) => {
    const [state, setState] = useState(new Date())
    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setState(new Date())
            console.log(state.getSeconds())
        }, 1000)
        return () => {
            clearInterval(setIntervalId)
        }
    }, [])
    return (
        <div>
            <span>{getTwoDigitString(state.getHours())}:</span>
            <span>{getTwoDigitString(state.getMinutes())}:</span>
            <span>{getTwoDigitString(state.getSeconds())}</span>
        </div>
    )
}