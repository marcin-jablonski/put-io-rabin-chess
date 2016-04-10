import '../styles/style'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { render } from 'react-dom';
import configureStore from './store/configureStore.js';
import Root from './containers/Root.js';
import App from './components/App.jsx'
import SampleComponent from './components/SampleComponent.jsx'

const store = configureStore();

//ReactDOM.render(
  //<Router history={ hashHistory }>
    //<Route path="/" component={ Root } >
      //<Route path="routed" component={ SampleComponent } />
    //</Route>
  //</Router>,
 //document.getElementById('root'));

ReactDOM.render(
 <Root store={store} />,
 document.getElementById('counter'));
