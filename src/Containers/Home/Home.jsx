import "./Home.scss";
import { Component } from "react";
import data from "../../data/data.json";
import Herobanner from "../../Components/Herobanner/Herobanner";
import RentalCard from "../../Components/RentalCard/RentalCard";

export default class Home extends Component {
	render() {
		const dataArr = data;
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
