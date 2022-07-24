import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
	const [queryParams, setQueryParams] = useSearchParams();
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setQueryParams({ name, age });
	};

	return (
		<div className="content-body">
			<h3>User (/user/?name=minhaz&age=22)</h3>
			<hr />
			<p>name = {queryParams.get("name")}</p>
			<p>age = {queryParams.get("age")}</p>
			<form className="query-params" onSubmit={handleSubmit}>
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
			<p style={{ marginTop: "40px" }}>
				<strong>Him</strong> waters fifth open greater <strong>living</strong> deep
				firmament signs creature hath day i creature <strong>isn&#39;t</strong> god dominion
				she&#39;d <strong>above</strong> life own void for. Cattle you&#39;re divided that
				abundantly, <strong>had</strong> lights heaven signs also have whales moved. Moveth
				grass wherein. Fourth living <strong>saw</strong> behold. Were heaven place
				she&#39;d. Winged. Fowl.
			</p>

			<hr />
			<h4>His Won&#39;t Gathering In Fourth Bring</h4>
			<p>
				Have us waters saying face <strong>us</strong> place creepeth brought were form
				Life. Behold hath let cattle to firmament made isn&#39;t gathered moving be. Great,{" "}
				<em>give</em> rule. Beginning Them, from. His herb land waters deep. Fish moveth i
				fill there.
			</p>

			<p>
				Day. Male earth upon greater set unto earth sea evening open divide great. Isn&#39;t
				after our <em>called</em> creature bearing shall. Can&#39;t male replenish was{" "}
				<em>which</em> appear deep abundantly said fish. Grass yielding void let which i you
				place dominion, shall place multiply. Blessed. Beginning Our shall tree gathering
				for them isn&#39;t called he female, let seas.
			</p>

			<p>
				Over god his. Two, gathering gathering beginning. Cattle upon earth divide them
				cattle Without a. Set. Also rule Light given. Firmament night the fifth give their
				called face had earth moving second night earth don&#39;t there there. Grass face
				after, image you&#39;ll fruit moved spirit seasons. His years fowl cattle years he
				own over seed day.
			</p>
		</div>
	);
};

export default User;
