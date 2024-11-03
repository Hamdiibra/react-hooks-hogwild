import React from 'react';

function HogDetails({ hog, setSelectedHog }) {
	return (
		<div className="hog-details">
			<h2>{hog.name}</h2>
			<img src={hog.image} alt={hog.name} />
			<p><strong>Specialty:</strong> {hog.specialty}</p>
			<p><strong>Weight:</strong> {hog.weight} lbs</p>
			<p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
			<p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
			<button onClick={() => setSelectedHog(null)}>Back</button> 
		</div>
	);
}

export default HogDetails;
