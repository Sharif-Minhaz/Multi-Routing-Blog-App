import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import SingleBlog from "../pages/SingleBlog";
import User from "../pages/User";
import Protected from "./Protected";
import { blogData } from "../data/data";
import AddBlog from "../pages/AddBlog";
import { LoggedInContext } from "../contexts/LoggedInContext";

const Index = () => {
	const [blogs, setBlogs] = useState(blogData);
	const { isLoggedIn } = useContext(LoggedInContext);

	return (
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/blog" element={<Blog blogs={blogs} />} />
				<Route path="/blog/:title" element={<SingleBlog />} />
				<Route
					path="/add-blog"
					element={
						<Protected isLoggedIn={isLoggedIn}>
							<AddBlog setBlogs={setBlogs} />
						</Protected>
					}
				/>
				<Route path="/user" element={<User />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</section>
	);
};

export default Index;
