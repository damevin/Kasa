import React, { Component } from "react";
import { Link } from "react-router-dom";
import Collapse from "../Collapse/Collapse";

export default class RentalCard extends Component {
	render() {

		return (
			<Link to={"/rental/" + this.props.id}>
				<article className="rentalcard">
					<div className="rentalcard__overlay"></div>
					<img className="rentalcard__img" src={this.props.cover} alt=""></img>
					<h2 className="rentalcard__title">{this.props.title}</h2>s
				</article>
			</Link>
		);
	}
}
