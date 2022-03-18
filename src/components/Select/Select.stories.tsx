import {Select} from './Select';
import {useState} from 'react';

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('1')
    return (
        <>
            <Select value={value}
                    onChange={setValue}
                    items={[
                        {value: '1', title: 'minsk'},
                        {value: '2', title: 'moscow'},
                        {value: '3', title: 'kiev'},
                    ]}/>
        </>
    )
}
