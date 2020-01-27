import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import 'tachyons'

import Projects from './components/Projects'
import TitleSequence from './components/TitleSequence'
import Information from './components/Information'
import Contact from './components/Contact'
import Navs from './components/Navs'


function App() {
  return (
    <div>
      
      <HashRouter>
        
        <TitleSequence />
        <Projects />
        <Information />
        <Contact />

      <div className='nav'>
        <Navs />
      </div>

        {/* <Switch>
        <Route exact path = '/projects' component={Projects} />
        <Route exact path = '/information' component={Information} />
        </Switch> */}

      </HashRouter>
    </div>
  );
}

export default App;
