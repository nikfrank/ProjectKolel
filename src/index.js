import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResponsiveProvider from './ResponsiveProvider';
import Layout from './Layout';

import {
  Work,
  About,
  Home,
  Blog,
} from './p/'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>

    <MuiThemeProvider>
      <ResponsiveProvider>
        <Layout>
          <Switch>
            <Route path='/blog' component={Blog}/>
            <Route path='/home' component={Home}/>
            <Route path='/work' component={Work}/>
            <Route path='/about' component={About}/>
            <Redirect from="/" to="/home" />
          </Switch>
        </Layout>
      </ResponsiveProvider>
    </MuiThemeProvider>

  </Router>, document.getElementById('root'));
  registerServiceWorker();
