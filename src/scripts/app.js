import '../styles/base.less';


/*-----------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import IndexPage from './sub/indexPage.jsx';
import CG from './sub/cg.jsx';
import Fe from './sub/fe.jsx';
import About from './about.jsx';

import Todo from './components/todo.jsx';
import Chisha from './components/chisha.jsx';
import IphoneScreen from './components/iphoneScreen.jsx';

ReactDOM.render(
    (
		<Router history={hashHistory}>
			<Route path="/" component={IndexPage} />
			<Route path="/fe" component={Fe} />
			<Route path="/cg" component={CG} />
			<Route path="/about" component={About} />

			<Route path="/app/todo" component={Todo} />
			<Route path="/app/chisha" component={Chisha} />
			<Route path="/app/iphoneScreen" component={IphoneScreen} />
		</Router>
    ),
    document.getElementById("outter")
);