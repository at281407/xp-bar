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
import { routes } from './Routes'

import Loading from './Components/Loading';
import ErrorPopup from './Components/ErrorPupup';

import BarView from './Components/_Views/BarView'
import LoginView from './Components/_Views/LoginView';
import RegistrationView from './Components/_Views/RegistrationView';
import DashboardView from './Components/_Views/DashboardView';
import LogView from './Components/_Views/LogView';

function AppContainer() {

    return (
        <Provider store={configureStore()} >
            <ThemeProvider theme={themes.highFantasy}>
                <App>
                    <Loading />
                    <ErrorPopup />
                    <Router>
                        <Route path={routes.signIn} component={LoginView} />
                        <Route path={routes.xpBar} component={BarView} />
                        <Route path={routes.registration} component={RegistrationView} />
                        <Route path={routes.dashboard} component={DashboardView} />
                        <Route path={routes.log} component={LogView} />
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
