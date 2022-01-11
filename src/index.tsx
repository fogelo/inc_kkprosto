import React from 'react';  // библиотека которая позволяет создавать компоненты (функции с jsx внутри)
import ReactDOM from 'react-dom'; //библиотека, которая позволяет отрисовывать компоненты в браузере (чтобы jsx превращался в html)
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
