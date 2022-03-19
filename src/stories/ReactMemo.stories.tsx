import React, {useState} from 'react';

export default {
    title: 'react memo'
}


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: Array<string> }) => {
    console.log('users rendering')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersMemo = React.memo(Users)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['anton', 'valera', 'artem'])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <UsersMemo users={users}/>
        </>
    )
}