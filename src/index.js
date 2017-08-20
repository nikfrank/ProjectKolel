import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ResponsiveProvider from './ResponsiveProvider';
import Layout from './Layout';
import routes from  './routes';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>

    <MuiThemeProvider>
      <ResponsiveProvider>
        <Layout>
          <Switch>
            {
              routes.map(({ path, component }) => (
                <Route path={path} exact component={component}/>
              ))
            }
            
          </Switch>
        </Layout>
      </ResponsiveProvider>
    </MuiThemeProvider>

  </Router>, document.getElementById('root'));
  registerServiceWorker();
