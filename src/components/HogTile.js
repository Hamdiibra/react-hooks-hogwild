import React from 'react';

function HogTile({ hog ,setSelectedHog}) {
    return (
        <div className="hog-tile" onClick={() => setSelectedHog(hog)}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} />
        </div>
    );
}
export default HogTile;