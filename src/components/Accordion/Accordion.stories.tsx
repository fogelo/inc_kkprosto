import {Accordion, AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';

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
        <Accordion title={'menu'} collapsed={false}/>

    )
}

export const CollapsedMode = () => {
    return (
        <Accordion title={'menu'} collapsed={true}/>

    )
}


