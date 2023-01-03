import { useState } from "react";
import { TPoint } from "../interfaces/point";
import { generateRandomColor } from "../utils/color.utils";

function usePoints() {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [removedPoints, setRemovedPoints] = useState<TPoint[]>([]);

  const addClickedPoint = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = event;
    setPoints((prev) => [
      ...prev,
      { x: clientX, y: clientY, color: generateRandomColor() },
    ]);
  };

  const undoLastPoint = () => {
    const removedPoint = points.pop();
    const newPoints = [...points];
    setPoints(newPoints);
    setRemovedPoints([...removedPoints, removedPoint!]);
  };

  const redoLastPoint = () => {
    const removedPoint = removedPoints.pop();
    const newRemovedPoints = [...removedPoints];
    setRemovedPoints(newRemovedPoints);
    setPoints([...points, removedPoint!]);
  };

  const canUndo = points.length === 0;
  const canRedo = removedPoints.length === 0;

  return {
    points,
    removedPoints,
    addClickedPoint,
    redoLastPoint,
    undoLastPoint,
    canRedo,
    canUndo,
  };
}

export default usePoints;
