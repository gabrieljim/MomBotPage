import React, { useEffect, useState } from "react";
import "./styles.css";

import List from "./List";
import Search from "./Search";
import Tags from "./Tags";
import commandsjson from "./commands.json";

const Commands = () => {
	let [commands] = useState(commandsjson);
	let [search, setSearch] = useState("");
	let [tag, setTag] = useState(null);

	const handleSearch = e => {
		setSearch(e.target.value.toLowerCase());
	};

	const handleClick = e => {
		setTag(tag === e.target.id ? null : e.target.id);
	};

	/*
	useEffect(() => {
		let tl = new TimelineLite();
		tl.fromTo(".commandscontainer", 0.5, { x: 100 }, { opacity: 1, x: 0 });
	},from []);
	*/

	return (
		<div className="commandscontainer">
			<h1>Commands</h1>
			<Search handler={handleSearch} search={search} />
			<Tags selected={tag} handler={handleClick} />
			<List
				commands={commands.filter(
					command =>
						command[0].match(search) &&
						command[1]["help"]["type"].match(tag ? tag : ".*") &&
						!command[1]["help"]["hideHelp"]
				)}
				search={search}
			/>
		</div>
	);
};

export default Commands;
