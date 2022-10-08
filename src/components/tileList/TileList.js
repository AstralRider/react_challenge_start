import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contactArray }) => {
  return (
    <div>
      {contactArray.map((array, idx) => (
        <Tile key={idx} obj={array} />
      ))}
    </div>
  );
};
