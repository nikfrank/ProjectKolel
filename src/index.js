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
  Mishna,
  About,
  Home,
  Blog,
} from './p/'

import './p/hometiles.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>

    <MuiThemeProvider>
      <ResponsiveProvider>
        <Layout>
          <Switch>
            <Route path='/blog' exact component={Blog}/>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/' exact component={About}/>
            <Route path='/about' exact component={About}/>
            <Route path='/Mishna' exact component={Mishna}/>
            <Route path='/Insights' exact component={Insights}/>
            <Route path='/Background' exact component={Background}/>
            <Route path='/RevoewQ&A' exact component={RevoewQ&A}/>
            <Route path='/FullReview' exact component={FullReview}/>
            <Route path='/EnglishCharts' exact component={EnglishCharts}/>
            <Route path='/PointByPoint' exact component={PointByPoint}/>
            <Route path='/Halacha' exact component={Halacha}/>
            <Route path='/DailyQuiz' exact component={DailyQuiz}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/DaatYosef/HE' exact component={DaatYosefHE}/> 
            <Route path='/Tavlaut' exact component={Tavlaut}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
            <Route path='/Navigator' exact component={Navigator}/>
          </Switch>
        </Layout>
      </ResponsiveProvider>
    </MuiThemeProvider>

  </Router>, document.getElementById('root'));
  registerServiceWorker();
