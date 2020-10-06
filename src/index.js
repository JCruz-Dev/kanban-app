/* eslint-env browser */
import './assets/scss/style.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './firebase'
import './scss/style.scss'
import GlobalContextProvider from './hooks/context';

render(<GlobalContextProvider><App /></GlobalContextProvider>, document.getElementById('app'));