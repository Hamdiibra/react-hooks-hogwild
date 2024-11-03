import React from 'react';
import HogTile from './HogTile';

function HogList({ hogs, setSelectedHog }) {
	return (
		<div className="hog-list">
			{hogs.map(hog => (
				<HogTile key={hog.name} hog={hog} setSelectedHog={setSelectedHog} />
			))}
		</div>
	);
}

export default HogList;
