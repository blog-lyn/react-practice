import React from "react";
import { Link, browserHistory } from "react-router";
//import { RouterContext } from 'react-router';

export default class Layout extends React.Component{
	contextTypes: {
   		 router: React.PropTypes.object.isRequired
  	}
	navigate(){
		//this.props.history.pushState(null,"/");
		browserHistory.push("/");
		//his.context.router.push("/")
		//this.context.router.push( );
		//router.push("/");
		console.log(this.props, this.context, browserHistory);

	}
	render() {
		return (
			<div>
				<h1> Hello World </h1>
				{this.props.children}
				<Link to ="archives" class="btn btn-danger"> archives </Link>
				<Link to ="settings" class="btn btn-success"> settings </Link>
				<button  class="btn "onClick={this.navigate.bind(this)}> featured</button>
			</div>
			
			);
	}
}