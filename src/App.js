import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About";
import Error from "./Containers/Errors/Error";
import Home from "./Containers/Home/Home";
import "./Containers/Home/Home.scss";
import { Component } from "react";
import Rental from "./Containers/Rental/Rental";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar className="homepage"></Navbar>
				<Routes>
					<Route path="*" element={<Error />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/rental/:id" element={<Rental />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer className="footer" />
			</>
		);
	}
}
