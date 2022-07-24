import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
	const truncate = (str, chars) => {
		if (str.length > 0) {
			return str.slice(0, chars) + "...";
		} else {
			return str;
		}
	};

	return (
		<div className="content-body">
			<h3>Blog page (/blog)</h3>
			<hr />
			<div className="blogs">
				{blogs.map((data) => {
					const { id, title, body } = data;
					return (
						<article className="blog" key={id}>
							<h3>{title}</h3>
							<p>{truncate(body, 160)}</p>
							<Link to={title} state={{ data }}>
								Learn More
							</Link>
						</article>
					);
				})}
			</div>
		</div>
	);
};

export default Blog;
