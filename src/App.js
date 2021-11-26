import "./App.css";
import { data } from "./data/data";
import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About";
import Error from "./Containers/Errors/Error";
import Home from "./Containers/Home/Home";
import { Component } from "react";
import Rental from "./Containers/Rental/Rental";
import Navbar from "./Components/Navbar/Navbar";

export default class App extends Component {
	render() {
		console.log(data);
		return (
			<>
			<Navbar></Navbar>
				<Routes>
					<Route path="*" element={<Error />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/rental/:id" element={<Rental />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
			</>
		);
	}
}
