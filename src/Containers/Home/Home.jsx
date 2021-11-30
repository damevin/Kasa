import React, { Component } from "react";
import Herobanner from "../../Components/Herobanner/Herobanner";
import RentalCard from "../../Components/RentalCard/RentalCard";
import data from "../../data/data.json";
import { useState } from "react";

export default class Home extends Component {
	render() {
		const dataArr = data;
		return (
			<main>
				<Herobanner></Herobanner>
				<section class="rental__section">
					{dataArr.map((item, index) => {
						return <RentalCard title={item.title} cover={item.cover} key={index} id={item.id}></RentalCard>;
					})}
				</section>
			</main>
		);
	}
}
