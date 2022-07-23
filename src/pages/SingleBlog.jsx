import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { blogData } from "../data/data";

const SingleBlog = () => {
	const location = useLocation();
	const { title } = useParams();
	const navigate = useNavigate();
    
	// const [blogBody, setBlogBody] = useState("");

	// useEffect(() => {
	// 	const blog = blogData.find((blog) => blog.title === title);
	// 	setBlogBody(blog.body);
	// }, []);

	return (
		<article>
			<h3>{title}</h3>
			<p>{location.state?.data.body}</p>
			<br />
			<button onClick={() => navigate("/blog")}>Go to blogs</button>
		</article>
	);
};

export default SingleBlog;
