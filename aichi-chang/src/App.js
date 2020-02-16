import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import './App.css';
import 'tachyons'

import TitleSequence from './components/TitleSequence'
import Portfolio from './components/Portfolio'



function App() {

  return (

    <HashRouter>

      <Switch>
        <Route exact path="/" component={TitleSequence} />
        <Route exact path='/portfolio' component={Portfolio} />

      </Switch>
    </HashRouter>
  );
}

export default App;
