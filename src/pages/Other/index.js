import "media-match";
import "core-js/es6/map";
import "core-js/es6/set";
import 'raf/polyfill';

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

render(
    <App />,
    document.getElementById('root')
);
