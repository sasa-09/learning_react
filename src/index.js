import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Counter from './Counter'
import DateTime from './DateTime';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
      <Counter />
      <DateTime />
    </>
);

