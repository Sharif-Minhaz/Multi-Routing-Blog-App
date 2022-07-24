import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<div className="error-body">
			<h1>404 page not found</h1>
			<button className="return-btn" onClick={() => navigate("/")}>
				Go to Home
			</button>
		</div>
	);
};

export default Error;
