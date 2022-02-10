import React, {useState} from 'react';
import style from './OnOff.module.css'


export const OnOffMy = () => {
    let [color, setColor] = useState(style.indicator)
    return (
        <div className={style.wrapper}>
            <button onClick={() => {
                setColor(style.indicator_green)
            }}>On
            </button>
            <button onClick={() => {
                setColor(style.indicator_red)
            }}>Off
            </button>
            <div className={color}/>
        </div>
    );
};


export const OnOffD = () => {

    let [on, setOn] = useState('grey')
    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: on,
        borderRadius: '50%',
        marginLeft: '5px'
    }

    return (
        <div style={wrapperStyle}>
            <button onClick={()=>setOn('green')}>On</button>
            <button onClick={()=>setOn('red')}>Off</button>
            <div style={indicatorStyle}/>
        </div>
    );
};
