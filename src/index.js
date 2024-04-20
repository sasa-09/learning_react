import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

function Hero () {
    return (
        <>
          <h1>Добро пожаловать в наш магазин</h1>
          <p>Начать покупки!</p>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Hero />
    </>
);

