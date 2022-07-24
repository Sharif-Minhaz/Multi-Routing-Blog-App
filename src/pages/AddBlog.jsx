import React, { useState, useId } from "react";

const AddBlog = ({ setBlogs }) => {
	const [inputs, setInputs] = useState({ title: "", body: "" });
	const blogId = useId();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newBlog = {
			id: blogId,
			title: inputs.title,
			body: inputs.body,
		};
		setBlogs((previousState) => [...previousState, newBlog]);
		setInputs({ title: "", body: "" });
	};

	const handleChange = (e) => {
		if (e.target.name === "title") {
			setInputs((previousState) => ({
				...previousState,
				title: e.target.value,
			}));
		} else {
			setInputs((previousState) => ({
				...previousState,
				body: e.target.value,
			}));
		}
	};

	return (
		<div className="content-body">
			<h3>ADD Blog (/add-blog)</h3>
			<hr />
			<form className="add-blog-form" onSubmit={handleSubmit}>
				<input
					name="title"
					value={inputs.title}
					onChange={handleChange}
					required
					type="text"
					placeholder="enter title"
				/>
				<textarea
					name="body"
					value={inputs.body}
					required
					cols="50"
					rows="6"
					onChange={handleChange}
					placeholder="enter body"
				></textarea>
				<button type="submit">ADD Blog</button>
			</form>
		</div>
	);
};

export default AddBlog;
