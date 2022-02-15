import React, {useState} from 'react';

export const UncontrolledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div>
            <div style={wrapperStyle}>
                <AccordionTitle collapsed={collapsed} setCollapsed={setCollapsed}/>
            </div>
            {collapsed && <AccordionBody/>}
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
