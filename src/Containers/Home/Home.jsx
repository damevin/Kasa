import React, { Component } from "react";
import Herobanner from "../../Components/Herobanner/Herobanner";
import RentalCard from "../../Components/RentalCard/RentalCard";

import { useState } from "react";

export default class Home extends Component {
	render() {
		const dataArr = [
			{
				title: "Titre de la location",
				cover:
					"https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg",
				id: 23982,
			},
			{
				title: "Test",
				cover:
					"https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg",
				id: 23982,
			},
			{
				title: "Test",
				cover:
					"https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-260nw-1510641710.jpg",
				id: 23982,
			},
		];
		return (
			<main>
				<Herobanner></Herobanner>
				<section class="rental__section">
					{dataArr.map((item, index) => {
						return <RentalCard title={item.title} cover={item.cover} key={index}></RentalCard>;
					})}
				</section>
			</main>
		);
	}
}
