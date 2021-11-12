import React from 'react';
import { render } from 'react-dom';

import {Provider} from 'react-redux';
import {Router, Route} from 'react-router-dom';
import { createHashHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";

import {theme} from './theme/dark-theme';

export const history = createHashHistory();


import Layout from './components/Layout.js';

import configureStore from './store/configureStore';

let store = configureStore();

render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout} />
        </Router>
    </Provider></ThemeProvider>, document.getElementById('root'));


