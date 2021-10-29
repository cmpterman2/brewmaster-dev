import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


import Layout from './components/Layout.js';

import configureStore from './store/configureStore';

let store = configureStore();

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout} />
        </Router>
    </Provider>, document.getElementById('root'));


