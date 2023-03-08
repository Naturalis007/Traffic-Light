import React, { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className= "traffic-light text-align:center">
			<span onClick={() => setColor("red")}
			className={"light red" + (color === "red" ? " glow" : "")}></span>

			<span onClick={() => setColor("yellow")}
			className={"light yellow" + (color === "yellow" ? " glow" : "")}></span>

			<span onClick={() => setColor("green")}
			className={"light green" + (color === "green" ? " glow" : "")}></span>
		</div>
	);
};

export default Home;