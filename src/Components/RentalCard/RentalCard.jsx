import React, { Component } from "react";
import "./RentalCard.scss";

export default class RentalCard extends Component {
	render() {
		function test() {
			console.log("okok");
		};

		return (
			<article className="rentalcard" onClick={test}>
				<div className="rentalcard__overlay"></div>
				<img className="rentalcard__img" src={this.props.cover} alt=""></img>
				<h2 className="rentalcard__title">{this.props.title}</h2>s
			</article>
		);
	}
}
