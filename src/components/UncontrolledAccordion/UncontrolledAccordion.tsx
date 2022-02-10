import React, {useState} from 'react';

export const UncontrolledAccordion = () => {
    let [collapsed, setCollapsed] = useState(true)
    const wrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div>
            <div style={wrapperStyle}>
                <AccordionTitle/>
                <button onClick={()=>setCollapsed(!collapsed)}>toggle</button>
            </div>
            {collapsed && <AccordionBody/>}
        </div>
    );
};

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return (
        <div>
            <h3>Accordion</h3>
        </div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
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
