import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';

export default {
    title: 'Accordion',
    component: Accordion,
}

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const CollapsedMode2 = Template.bind({})
CollapsedMode2.args = {
    title: 'menu',
    collapsed: false,
}






export const UnCollapsedMode = () => {
    return (
        <Accordion title={'menu'} collapsed={false} setCollapsed={action('something')}/>

    )
}

export const CollapsedMode = () => {
    return (
        <Accordion title={'menu'} collapsed={true} setCollapsed={action('something')}/>

    )
}


export const ModeChanging = () => {
    const [value, setValue] = useState(false)
    return (
        <Accordion title={'menu'} collapsed={value} setCollapsed={()=>setValue(!value)}/>

    )
}




