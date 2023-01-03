import { makeStyles } from "@material-ui/styles";
import Point from "./Point";
import CanvasActions from "./CanvasActions";
import usePoints from "../hooks/usePoints";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
  },
}));

const Canvas = () => {
  const classes = useStyles();
  const {
    points,
    removedPoints,
    addClickedPoint,
    redoLastPoint,
    undoLastPoint,
    canRedo,
    canUndo,
  } = usePoints();

  return (
    <>
      <CanvasActions
        undoLastPoint={undoLastPoint}
        redoLastPoint={redoLastPoint}
        canUndo={canUndo}
        canRedo={canRedo}
      />
      <div className={classes.root} onClick={addClickedPoint}>
        {points.map((point, index) => (
          <Point x={point.x} y={point.y} color={point.color} key={index} />
        ))}
      </div>
    </>
  );
};

export default Canvas;
