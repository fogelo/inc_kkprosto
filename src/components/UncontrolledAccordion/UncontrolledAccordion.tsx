import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './reducer';


export const UncontrolledAccordion = () => {
    // const [collapsed, setCollapsed] = useState(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})


    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div>
            <div style={wrapperStyle}>
                <AccordionTitle collapsed={state.collapsed} setCollapsed={() => dispatch({type: TOGGLE_COLLAPSED})}/>
            </div>
            {state.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={() => props.setCollapsed(!props.collapsed)}>
            <h3>Accordion</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
