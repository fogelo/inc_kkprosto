import React from 'react';


//говорим каким должен быть объект props, который приходит в нашу компоненту
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={() => props.setValue(1)}/>
            <Star selected={props.value > 1} onClick={() => props.setValue(2)}/>
            <Star selected={props.value > 2} onClick={() => props.setValue(3)}/>
            <Star selected={props.value > 3} onClick={() => props.setValue(4)}/>
            <Star selected={props.value > 4} onClick={() => props.setValue(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.onClick}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}