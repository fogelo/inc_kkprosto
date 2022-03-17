import {Accordion} from './Accordion';
import {useState} from 'react';

export default {
    title: 'Accordion',
    component: Accordion,
}

export const UnCollapsedMode = () => {
    return (
        <Accordion title={'menu'} collapsed={false}/>

    )
}
export const CollapsedMode = () => {
    return (
        <Accordion title={'menu'} collapsed={true}/>

    )
}