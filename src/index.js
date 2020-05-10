import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import Option from './option'
import Company from './company'
import Greeting from './greeting'
import Inquiry from './inquiry'

import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route exact path='/' component={App}/>
        <Route exact path='/option' component={Option}/>
        <Route exact path='/company' component={Company}/>
        <Route exact path='/greeting' component={Greeting}/>
        <Route exact path='/inquiry' component={Inquiry}/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
