import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

//компоненты - это функции, их вызывает реакт, чтобы от них получить jsx разметку, которую он потом отрисовывает
//компонента ждет входные данные (props), чтобы отрисовать по разному jsx
//исользуя typescript там где лежит компонента всегда создаем тайпскриптовый тип

function App() {
    //полезное что-то
    console.log('App rendering')

    //обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title={'this is APP component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'menu'} collapsed={true}/>
            <Accordion title={'users'} collapsed={false}/>
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





