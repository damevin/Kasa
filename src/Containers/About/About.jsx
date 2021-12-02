import React, { Component } from "react";
import Collapse from "../../Components/Collapse/Collapse";
import Herobanner from "../../Components/Herobanner/Herobanner";
import guidelines from "../../data/guidelines.json";
import "./About.scss";

export default class About extends Component {
	render() {
		return (
			<div className="about">
				<Herobanner origin="about"></Herobanner>
				<section className="about__guidelines">
					{guidelines.map((guideline) => {
						return (
							<Collapse title={guideline.title} key={guideline.id} content={guideline.description} />
						);
					})}
				</section>
			</div>
		);
	}
}
