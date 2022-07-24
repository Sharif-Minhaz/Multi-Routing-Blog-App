import React, { useState } from "react";
import "./app.css";
import Routers from "../routers";
import Nav from "./react-router/Nav";
import { BrowserRouter } from "react-router-dom";
import { LoggedInContext } from "../contexts/LoggedInContext";

function App(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<BrowserRouter>
			<LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
				<Nav />
				<Routers />
			</LoggedInContext.Provider>
		</BrowserRouter>
	);
}

export default App;
