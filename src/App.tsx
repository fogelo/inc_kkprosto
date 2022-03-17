import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOffD, OnOffMy} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

//компоненты - это функции, их вызывает реакт, чтобы от них получить jsx разметку, которую он потом отрисовывает
//компонента ждет входные данные (props), чтобы отрисовать по разному jsx
//используя typescript там где лежит компонента всегда создаем тайпскриптовый тип

function App() {
    const [value, setValue]= useState<0|1|2|3|4|5>(0)
    return (
        <div className="App">
            <PageTitle title={'this is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={value} setValue={setValue}/>

            <Accordion title={'menu'} collapsed={true}/>
            <Accordion title={'users'} collapsed={false}/>

            <OnOffMy/>
            <OnOffD/>

            <UncontrolledAccordion/>
            <UncontrolledRating/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h1>{props.title}</h1>
    )
}

export default App;





