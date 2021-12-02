import React, { Component } from "react";
import "./Carrousel.scss";
import { ReactComponent as ChevronRight } from "./chevron-right.svg";
import { ReactComponent as ChevronLeft } from "./chevron-left.svg";

export default class Carrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
			paused: false,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (this.state.paused === false) {
				let newSlide =
					this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
				this.setState({ currentSlide: newSlide });
			}
		}, 4000);
	}

	nextSlide() {
		let newSlide =
			this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({ currentSlide: newSlide });
	}

	prevSlide() {
		let newSlide =
			this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	}

	setCurrentSlide = (index) => {
		this.setState({ currentSlide: index });
	};

	render() {
		return (
			<div className="container">
				<div className="carrousel">
					<div className="carrousel__navigation">
						<ChevronLeft
							className="chevron"
							onClick={() => {
								this.prevSlide();
							}}
						/>

						<ChevronRight
							className="chevron"
							onClick={() => {
								this.nextSlide();
							}}
						/>
					</div>

					{this.props.pictures.map((picture, index) => {
						return (
							<img
								alt=""
								src={picture}
								key={index}
								className={index === this.state.currentSlide ? "carrousel__img" : "hide-img"}
							></img>
						);
					})}

					<span className="carrousel__legend">
						{this.state.currentSlide + 1}/{this.props.pictures.length}
					</span>
				</div>
			</div>
		);
	}
}
