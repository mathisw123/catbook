/**
 * Created by mathiswan on 2017-02-23.
 */
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);