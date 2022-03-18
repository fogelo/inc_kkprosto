import s from './Select.module.css'
import {useEffect, useState} from 'react';
import {KeyboardEvent} from 'react'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(true)
    const [hover, setHover] = useState('')

    const selectedItem = props.items.find(i => i.value === props.value)
    // const hoveredItem = props.items.find(i => i.value === hover)

    const changeValue = (value: string) => {
        props.onChange(value)
        setActive(false)
    }

    useEffect(() => {
        setHover(props.value)
    }, [props.value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    if (props.items[i + 1]) {
                        props.onChange(props.items[i + 1].value)
                        break
                    }
                }
            }
        }
        if (e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    if (props.items[i - 1]) {
                        props.onChange(props.items[i - 1].value)
                        break
                    }
                }
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            <select>
                <option value="1">moscow</option>
                <option value="1">kiev</option>
                <option value="1">minsk</option>
            </select>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <h3 onClick={() => setActive(!active)}>{selectedItem && selectedItem.title}</h3>
                {active
                    ? <div className={s.items}>
                        {props.items.map(i => {

                            return <div className={hover === i.value ? s.item : ''}
                                        onMouseEnter={() => setHover(i.value)}
                                        onClick={() => changeValue(i.value)} key={i.value}>{i.title}</div>
                        })}
                    </div>
                    : ''
                }
            </div>
        </>
    )
}