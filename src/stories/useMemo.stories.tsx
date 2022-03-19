import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(1)
    const [b, setB] = useState<number>(1)

    let resultA
    let resultB = 1


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA *= i
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}


const Users = (props: { users: Array<string> }) => {
    console.log('users rendering')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersMemo = React.memo(Users)


export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo rendering')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['anton', 'valera', 'artem'])

    const usersMemo = useMemo(() => {
       return  users.filter(u => u.indexOf('t') !== -1)
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={()=>setUsers([...users, 'Katya'])}>add user</button>
            {counter}
            <UsersMemo users={usersMemo}/>
        </>
    )
}