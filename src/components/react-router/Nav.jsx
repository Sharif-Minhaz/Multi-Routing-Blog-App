import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<NavLink className="navLink" to="/">
				Home
			</NavLink>
			<NavLink className="navLink" to="/about">
				About
			</NavLink>
			<NavLink className="navLink" to="/contact">
				Contact
			</NavLink>
			<NavLink className="navLink" to="/blog">
				Blog
			</NavLink>
			<NavLink className="navLink" to="/user/?name=minhaz&age=22">
				User
			</NavLink>
		</nav>
	);
};

export default Nav;
