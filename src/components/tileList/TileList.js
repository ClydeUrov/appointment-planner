import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts, appointments }) => {
  const data = contacts || appointments

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {contacts ? <Tile contact={item} /> : <Tile appointment={item} />}
          </li>
        ))}
      </ul>
    </div>
  );
};
