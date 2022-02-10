import React, {useState} from 'react';
import style from './OnOff.module.css'


const OnOff = () => {
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

export default OnOff;