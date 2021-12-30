import './seasons.css';
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Let's Hit The Beach!!!",
    iconName: "sun",
  },
  Winter: {
    text: "Burr!!It's Chilly",
    iconName: "snowflake",
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "Winter";
  } else {
    return latitude > 0 ? "Winter" : "Summer";
  }
};

const SeasonsDisplay = ({latitude}) => {
  const season = getSeason(latitude, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  return (
    <div className={`season ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonsDisplay;
