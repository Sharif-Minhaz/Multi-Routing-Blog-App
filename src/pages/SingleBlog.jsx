import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
// import { blogData } from "../data/data";

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
		<article className="content-body">
			<h3>{title}</h3>
			<hr />
			<p>{location.state?.data.body}</p>
			<br />
			<button className="return-btn" onClick={() => navigate("/blog")}>Go to blogs</button>
		</article>
	);
};

export default SingleBlog;
