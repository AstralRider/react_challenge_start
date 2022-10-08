import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contactArray }) => {
  contactArray.map(({ name, email, phone }) => console.log(name, email, phone));
  return (
    <div>
      {contactArray.map(({ name, email, phone }, idx) => (
        <Tile key={idx} name={name} email={email} phone={phone} />
      ))}
    </div>
  );
};
