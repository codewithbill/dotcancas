import React from "react";
import { TPoint } from "../interfaces/point";

const Point = ({ x, y, color }: TPoint) => {
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        border: `5px solid ${color}`,
        position: "absolute",
        left: x - 15,
        top: y - 15,
      }}
    ></div>
  );
};

export default Point;
