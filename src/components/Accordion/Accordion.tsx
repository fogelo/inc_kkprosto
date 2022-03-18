import React from 'react';

export type AccordionPropsType = {
    /**
     * Menu of accordion
     */
    title: string
    collapsed: boolean
    setCollapsed: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
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

