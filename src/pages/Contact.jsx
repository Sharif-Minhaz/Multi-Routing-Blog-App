import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div>Contact page</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quibusdam adipisci
				facilis non optio a dignissimos vitae, blanditiis aliquam commodi.
			</p>
			<button onClick={() => navigate("/")}>Go to home</button>
		</div>
	);
};

export default Contact;
