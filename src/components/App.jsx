import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnRouter from "./react-router/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import "./app.css";
import Nav from "./react-router/Nav";
import SingleBlog from "../pages/SingleBlog";
import User from "../pages/User";

function App(props) {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:title" element={<SingleBlog />} />
				<Route path="/user" element={<User />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
