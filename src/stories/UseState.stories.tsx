import {useState} from 'react';

export default {
    title: 'useState demo'
}

function difficultCounting() {
    console.log('difficult counting')
    return 1 + 2
}

export const Example1 = () => {

    // const initValue = difficultCounting()
    // const initValue= useMemo(()=>difficultCounting, [])
    const [counter, setCounter] = useState(difficultCounting)
    const changer = (state: number) => {
        return state + 1
    }
    return (
        <div>
            <button onClick={()=>setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}
