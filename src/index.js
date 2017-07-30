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


const history = createHashHistory();
const home = <MuiThemeProvider><Home/></MuiThemeProvider>

ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path='/blog' component={Blog}/>
        <Route path='/home' component={home}/>
        <Route path='/work' component={Work}/>
        <Route path='/about' component={About}/>
        <Redirect from="/" to="/home" />
      </Switch>
    </Layout>
  </Router>, document.getElementById('root'));
  registerServiceWorker();
