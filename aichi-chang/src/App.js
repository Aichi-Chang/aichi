import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import 'tachyons'

import TitleSequence from './components/TitleSequence'
import Portfolio from './components/Portfolio'



function App() {

  return (

    <BrowserRouter>

      <Switch>
        <Route exact path="/" component={TitleSequence} />
        <Route exact path='/portfolio' component={Portfolio} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
