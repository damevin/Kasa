import "./Navbar.scss";
import { ReactComponent as Logo } from "./NavbarLogo.svg";
import { NavLink } from "react-router-dom";

import React, { Component } from "react";

export default class Navbar extends Component {
	render() {
		return (
			<>
				<Logo className="navbar__logo"></Logo>
				<nav className="navbar__nav">
					<NavLink className={({isActive}) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/">Accueil</NavLink>
     <NavLink className={({isActive}) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/about">A propos</NavLink>
				</nav>
			</>
		);
	}
}
