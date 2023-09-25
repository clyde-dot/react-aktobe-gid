import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import ScrollRestoration from 'react-scroll-restoration'
import {BrowserRouter  as Router} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Preloader from './setting/Preloader'

import 'bootstrap/dist/css/bootstrap.min.css';

import './i18next'
ReactDOM.render(
  <div>
    <Suspense fallback={<Preloader/>}>
        <Router basename={'/react-aktobe-gid'}>
          <ScrollRestoration/>
          <App />
        </Router>
    </Suspense>
  </div>,
  document.getElementById('root')
);


serviceWorker.unregister();
