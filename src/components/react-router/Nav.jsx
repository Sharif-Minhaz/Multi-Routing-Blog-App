import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoggedInContext } from "../../contexts/LoggedInContext";

const Nav = () => {
	const { isLoggedIn, setIsLoggedIn } = useContext(LoggedInContext);

	const toggle = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<nav className="nav">
			<div className="links">
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
				{isLoggedIn && (
					<NavLink className="navLink" to="/add-blog">
						Add-Blog
					</NavLink>
				)}
				<NavLink className="navLink" to="/user/?name=minhaz&age=22">
					User
				</NavLink>
			</div>

			{isLoggedIn ? (
				<button onClick={toggle}>Logout</button>
			) : (
				<button onClick={toggle}>Login</button>
			)}
		</nav>
	);
};

export default Nav;
