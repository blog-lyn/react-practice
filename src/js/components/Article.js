import React from "react";

export default class extends React.Component{
	render(){

		const  { title }= this.props;

	return(
		<div class="col-md-4">
				<h2>{title}</h2>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. </p>
				<a class="btn btn-default" href="#"> More Info </a>
		</div>
		);

	}

}