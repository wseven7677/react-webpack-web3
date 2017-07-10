import '../styles/base.less';


/*-----------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import IndexPage from './sub/indexPage.jsx';
import Life from './sub/life.jsx';
import Tech from './sub/tech.jsx';


ReactDOM.render(
    (
		<Router history={hashHistory}>
			<Route path="/" component={IndexPage}/>
			<Route path="/tech" component={Tech}/>
			<Route path="/life" component={Life}/>
		</Router>
    ),
    document.getElementById("outter")
);