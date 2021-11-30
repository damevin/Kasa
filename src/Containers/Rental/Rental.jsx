import React, { Component } from "react";
import data from "../../data/data.json";

export default class Rental extends Component {
	render() {
		const rentalData = data;
		const rentalUrlId = window.location.pathname.substr(8);
		console.log(rentalData);

		const rental = rentalData.find((item) => item.id === rentalUrlId);
		console.log(rental);
		return <div>{rental.title}</div>;
	}
}
