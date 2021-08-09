import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//import './footer'
//import './header'
//import './home';

import '../../../Login';
import './firebase'
import 'bootswatch/dist/superhero/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

