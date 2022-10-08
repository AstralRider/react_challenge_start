import React from "react";

export const Tile = ({ obj }) => {
  return (
    <div className="tile-container">
      {Object.values(obj).map((value, idx) => (
        <p key={idx} className={`${idx === 0 ? "tile-title tile" : "tile"}`}>
          {value}
        </p>
      ))}
    </div>
  );
};
