import React, {useState} from 'react';

import {Rating, RatingValueType} from './Rating';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Rating',
    component: Rating,
}

export const Rating0 = () => <Rating value={0} setValue={action('a star was clicked ')}/>
export const Rating1 = () => <Rating value={1} setValue={action('a star was clicked ')}/>
export const Rating2 = () => <Rating value={2} setValue={action('a star was clicked ')}/>
export const Rating3 = () => <Rating value={3} setValue={action('a star was clicked ')}/>
export const Rating4 = () => <Rating value={4} setValue={action('a star was clicked ')}/>
export const Rating5 = () => <Rating value={5} setValue={action('a star was clicked ')}/>
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return (
        <Rating value={rating} setValue={setRating}/>
    )
}