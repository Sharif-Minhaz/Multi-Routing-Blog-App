import React, { useState } from "react";
import { blogData } from "../data/data";
import { Link } from "react-router-dom";

const Blog = () => {
	const [blogs, setBlogs] = useState(blogData);

	const truncate = (str, chars) => {
		if (str.length > 0) {
			return str.slice(0, chars) + "...";
		} else {
			return str;
		}
	};

	return (
		<div>
			<div>Blog page</div>
			<section>
				{blogs.map((data) => {
					const { id, title, body } = data;
					return (
						<article key={id}>
							<h3>{title}</h3>
							<p>{truncate(body, 200)}</p>
							<Link to={title} state={{ data }}>
								Learn More
							</Link>
						</article>
					);
				})}
			</section>
		</div>
	);
};

export default Blog;
