import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import  Bootstrap from "./vendor/bootstrap-without-jquery";

import Archives  from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";



const app = document.getElementById('app');

ReactDOM.render(
	<Router  history={browserHistory} >
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
 app);