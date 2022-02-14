import React, {useState} from 'react';
import style from './UncontrolledRating.module.css'

export function UncontrolledRating() {
    const [value, setValue] = useState(0)

    return (
        <div className={style.uncontrolledRating} >
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

            <div onClick={() => setValue(1)}><Star selected={value > 0}/></div>
            <div onClick={() => setValue(2)}><Star selected={value > 1}/></div>
            <div onClick={() => setValue(3)}><Star selected={value > 2}/></div>
            <div onClick={() => setValue(4)}><Star selected={value > 3}/></div>
            <div onClick={() => setValue(5)}><Star selected={value > 4}/></div>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return (
        <div>
            {props.selected ? <span><b>star</b> </span> : <span>star </span>}
        </div>
    )

}