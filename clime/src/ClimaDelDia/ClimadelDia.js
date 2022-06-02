import React from "react";

const ClimadelDia = ({ min, max, weatherType, weatherKey }) => {
  return (
    <div>
      <div>
        <img
          src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
          alt={weatherType}
        />
      </div>
      <h2>
        Min: {min} Max: {max}
      </h2>
    </div>
  );
};

export default ClimadelDia;
