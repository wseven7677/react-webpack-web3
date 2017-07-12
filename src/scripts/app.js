import '../styles/base.less';


/*-----------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import IndexPage from './sub/indexPage.jsx';
import CG from './sub/cg.jsx';
import Fe from './sub/fe.jsx';


ReactDOM.render(
    (
		<Router history={hashHistory}>
			<Route path="/" component={IndexPage}/>
			<Route path="/fe" component={Fe}/>
			<Route path="/cg" component={CG}/>
		</Router>
    ),
    document.getElementById("outter")
);