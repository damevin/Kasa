import React, { Component } from "react";
import Herobanner from "../../Components/Herobanner/Herobanner";
import RentalCard from "../../Components/RentalCard/RentalCard";
import "./Home.scss";
import data from "../../data/data.json";

export default class Home extends Component {
	render() {
		const dataArr = data;
		console.log(dataArr);
		return (
			<main className="homepage">
				<Herobanner origin="homepage"></Herobanner>

				<section className="rental__section">
					{dataArr.map((item, index) => {
						return (
							<RentalCard title={item.title} cover={item.cover} key={index} id={item.id}></RentalCard>
						);
					})}
				</section>
			</main>
		);
	}
}
