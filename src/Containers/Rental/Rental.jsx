import React, { Component } from "react";
import data from "../../data/data.json";
import Collapse from "../../Components/Collapse/Collapse.jsx";

export default class Rental extends Component {
	render() {
		const rentalData = data;
		const rentalUrlId = window.location.pathname.substr(8);
		const rental = rentalData.find((item) => item.id === rentalUrlId);
	
		return (
			<div>
				{rental.title}
				<Collapse title="Équipements" content={rental.equipments}></Collapse>
				<Collapse title="Description" content={rental.description}></Collapse>
			</div>
		);
	}
}
