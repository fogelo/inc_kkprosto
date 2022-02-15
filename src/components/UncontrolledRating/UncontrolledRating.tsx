import React, {useState} from 'react';
import style from './UncontrolledRating.module.css'

export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    return (
        <div className={style.uncontrolledRating}>
            {/*<Star selected={value >= 0}/>*/}
            {/*<button onClick={() => setValue(0)}>+</button>*/}
            {/*<Star selected={value >= 1}/>*/}
            {/*<button onClick={() => setValue(1)}>+</button>*/}
            {/*<Star selected={value >= 2}/>*/}
            {/*<button onClick={() => setValue(2)}>+</button>*/}
            {/*<Star selected={value >= 3}/>*/}
            {/*<button onClick={() => setValue(3)}>+</button>*/}
            {/*<Star selected={value >= 4}/>*/}
            {/*<button onClick={() => setValue(4)}>+</button>*/}

            <Star value={1} setValue={setValue} selected={value > 0}/>
            <Star value={2} setValue={setValue} selected={value > 1}/>
            <Star value={3} setValue={setValue} selected={value > 2}/>
            <Star value={4} setValue={setValue} selected={value > 3}/>
            <Star value={5} setValue={setValue} selected={value > 4}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

function Star(props: StarPropsType) {
    return (
        <div onClick={() => {
            props.setValue(props.value)
        }}>
            <span>{props.selected ? <b>star</b> : 'star'}</span>
        </div>
    )

}