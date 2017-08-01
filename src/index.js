import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import Layout from './Layout';
import Work from './Work';
import About from './About';
import Home from './Home';
import Blog from './Blog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResponsiveProvider from './ResponsiveProvider';

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
