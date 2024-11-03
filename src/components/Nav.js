import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ setFilterGreased, setSortCriteria }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="filterWrapper"></div>
			<label>
				<input
					type="checkbox"
					onChange={(e) => setFilterGreased(e.target.checked)}
				/>
				Show Greased Hogs
			</label>
			
			<select onChange={(e) => setSortCriteria(e.target.value)}>
				<option value="name">Sort by Name</option>
				<option value="weight">Sort by Weight</option>

			</select>
		</div>
	);
};

export default Nav;
