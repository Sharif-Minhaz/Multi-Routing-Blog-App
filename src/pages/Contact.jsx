import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();

	return (
		<div className="content-body">
			<h3>Contact page (/contact)</h3>
			<hr />
			<table>
				<tbody>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
					<tr>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
						<td>Cell</td>
					</tr>
				</tbody>
			</table>

			<button className="return-btn" onClick={() => navigate("/")}>Go to home</button>
		</div>
	);
};

export default Contact;
