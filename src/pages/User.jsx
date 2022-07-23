import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
	const [queryParams, setQueryParams] = useSearchParams();
	const [name, setName] = useState("");
	const [age, setAge] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryParams({ name, age });
	};

	return (
		<div>
			<h1>User</h1>
			<p>{queryParams.get("name")}</p>
			<p>{queryParams.get("age")}</p>
			<form onSubmit={handleSubmit}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="name here"
				/>
				<input
					value={age}
					onChange={(e) => setAge(e.target.value)}
					type="number"
					placeholder="age here"
				/>
				<button type="submit">Set query params</button>
			</form>
		</div>
	);
};

export default User;
