import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ appointments }) => {
  return (
    <div>
      {appointments.map((array, idx) => (
        <Tile key={idx} obj={array} />
      ))}
    </div>
  );
};
