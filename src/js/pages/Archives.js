import React from "react";
import { Link } from "react-router";

import Article from "../components/Article";

export default class Archives extends React.Component{

	render() {
		const { query } = this.props.location;
		const { article } = this.props.params;
		const { date, filter }  = query;
		//console.log(this.props);
		const Articles = [
			"Some Article",
			"Some Other Article",
			"Yet  Another Article ",
			"Still More",
			"Fake Article",
			"Partial Another  ",
			"Still More",
		].map((title, i) =>  <Article key={i}  title={title} /> );

		return (
			<div>
				<h1> Archives </h1>
				<p>hello  this  is  archives</p>
				<h4>date: {date}, filter: {filter} </h4>
				<div class="row">{Articles}</div>
			</div>
			);
	}
}
