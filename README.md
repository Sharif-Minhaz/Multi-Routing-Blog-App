### React routing with `react-router-dom`

---

#### Created routes

1. / (home route)
2. /about (about route)
3. /contact (contact route)
4. /blog (blog route with sub routes and dynamic routes)
5. /add-blog (protected route)
6. /use (query and search params route )
7.  - (error route)

#### Wrap the entire components that require routing with `BrowserRouter`

```jsx
<BrowserRouter>
	<Nav /> {/* Nav component */}
	<Routers /> {/* Routes component */}
</BrowserRouter>
```

#### Create Nav links

<p>Note: Here we use <strong>NavLink</strong> instead of <strong>Link</strong> component. Because it will give us the chance to style the active link </p>

```js
const toggle = () => {
	setIsLoggedIn(!isLoggedIn);
};
```

```jsx
<nav>
	<div>
		<NavLink to="/">Home</NavLink>
		<NavLink to="/about">About</NavLink>
		<NavLink to="/contact">Contact</NavLink>
		<NavLink to="/blog">Blog</NavLink>
		{isLoggedIn && <NavLink to="/add-blog">Add-Blog</NavLink>} {/* Protected route link */}
		<NavLink to="/user/?name=minhaz&age=22">User</NavLink>
	</div>

	{isLoggedIn ? (
		<button onClick={toggle}>Logout</button>
	) : (
		<button onClick={toggle}>Login</button>
	)}
</nav>
```

#### Create `Routers` components with protected route

```jsx
// How does protected route works

import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
	if (!isLoggedIn) {
		return <Navigate to="/" replace />;
	}
	return children;
};

export default Protected;
```

```jsx
<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/about" element={<About />} />
	<Route path="/contact" element={<Contact />} />
	<Route path="/blog" element={<Blog />} />
	<Route path="/blog/:title" element={<SingleBlog />} /> {/* dynamic routes */}
	<Route
		path="/add-blog"
		element={
			<Protected isLoggedIn={isLoggedIn}>
				<AddBlog />
			</Protected>
		}
	/>
	<Route path="/user" element={<User />} />
	<Route path="*" element={<Error />} />
</Routes>
```

### Handle params and search params

```js
// /user/?name=minhaz&age=22
const [queryParams, setQueryParams] = useSearchParams();

// get query params
queryParams.get("name"); // minhaz
queryParams.get("age"); // 22

// set query params
setQueryParams({ name: "John", age: 33 }); // /user/?name=John&age=33

```
