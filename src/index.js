import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Blog from './Blog';
import { Router, Route, Switch, Redirect } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import Layout from './Layout';
import Work from './Work';
import About from './About';
import Home from './Home';


const history = createHashHistory();


ReactDOM.render(
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path='/blog' component={Blog}/>
        <Route path='/home' component={Home}/>
        <Route path='/work' component={Work}/>
        <Route path='/about' component={About}/>
        <Redirect from="/" to="/home" />

      </Switch>
    </Layout>
  </Router>, document.getElementById('root'));
  registerServiceWorker();
