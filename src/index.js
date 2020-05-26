import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.sc.js';

import { Provider } from 'react-redux'
import configureStore from './Redux/store';
import {ThemeProvider} from 'styled-components';
import * as themes from './themes.sc';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import BarView from './Components/_Views/BarView'
import LoginView from './Components/_Views/LoginView';

function AppContainer() {

    return (
        <Provider store={configureStore()} >
            <ThemeProvider theme={themes.highFantasy}>
                <App>
                    <Router>
                        <Route path="/sign-in" component={LoginView} />
                        <Route path="/xpbar" component={BarView}/>
                    </Router>
                </App>
            </ThemeProvider>
        </Provider>
    );
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
