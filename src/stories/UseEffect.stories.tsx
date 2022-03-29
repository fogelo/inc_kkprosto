import {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first and every counter change')
        document.title = counter.toString()
    }, [counter])
    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
            </div>
            <div>
                <button onClick={() => setFake(fake + 1)}>+</button>
                {fake}
            </div>
        </div>
    )
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect first and every counter change')
            document.title = counter.toString()
        }, 1000)
    }, [counter])
    return (
        <div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>
                {counter}
            </div>
            <div>
                <button onClick={() => setFake(fake + 1)}>+</button>
                {fake}
            </div>
        </div>
    )
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)


    //вот так не будет перерисовки каждую секунду, но сетинтервал срабатывать будет, только counter он будет брать из замыкания и всегда 1
    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter(counter + 1)
    //         console.log(counter)
    //     }, 1000)
    // }, [])

    //а вот так перерисовка будет, поскольку функция внутри setState всегда в качестве параметра принимает актуальное значение
    // useEffect(() => {
    //     setInterval(() => {
    //         setCounter((state) => state + 1)
    //         console.log(counter)
    //     }, 1000)
    // }, [])
    return (
        <div>
            {counter}
        </div>
    )
}

export const Clock = () => {
    const date = useMemo(() => new Date(),[])
    const [hours, setHours] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(date.getSeconds())

    setInterval(() => {
        const newDate = new Date()
        setHours(newDate.getHours())
        setMinutes(newDate.getMinutes())
        setSeconds(newDate.getSeconds())
    }, 1000)

    console.log(new Date().getHours())
    return (
        <div>
            {hours}:{minutes}:{seconds}
        </div>
    )
}