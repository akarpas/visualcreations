import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import style from './App.scss';

const App = () => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <h1 className={style.headerTitle}>Visual Creations</h1>
    </header>
    <p>React / Redux Boilerplate with Webpack. ESLint setup and SCSS Support</p>
  </div>
);

export default App;
