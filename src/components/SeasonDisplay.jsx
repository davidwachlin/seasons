import React from 'react';

const getSeason = (lat, month) => {
  console.log(`from getSeason: ${lat}, ${month}`);
  if (month > 2 && month < 8) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(`from SeasonDisplay: ${season}`);
  return <div>Latitude: {props.lat} </div>;
};

export default SeasonDisplay;
