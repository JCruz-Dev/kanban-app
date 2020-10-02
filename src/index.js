/* eslint-env browser */
import './assets/scss/style.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import './firebase'

render(<App />, document.getElementById('app'));