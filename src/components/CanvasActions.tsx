import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 100,
    position: "absolute",
    right: 0,
    width: "fit-content",
  },
  button: {
    padding: "5px",
    margin: "5px",
    border: "none",
    minWidth: "100px",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "aqua",
    textTransform: "uppercase",
    "&:disabled": {
      background: "transparent",
      border: "1px solid rgba(128, 128, 128, 0.397)",
      color: "rgba(128, 128, 128, 0.397)",
      cursor: "not-allowed",
    },
  },
  undo: {
    color: "brown",
  },
  redo: {
    color: "blue",
  },
}));

type CanvasActionProps = {
  undoLastPoint: () => void;
  redoLastPoint: () => void;
  canRedo: boolean;
  canUndo: boolean;
};

const CanvasActions = ({
  undoLastPoint,
  redoLastPoint,
  canUndo,
  canRedo,
}: CanvasActionProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <button
        onClick={undoLastPoint}
        className={`${classes.button} ${classes.undo}`}
        disabled={canUndo}
      >
        Undo
      </button>
      <button
        onClick={redoLastPoint}
        className={`${classes.button} ${classes.redo}`}
        disabled={canRedo}
      >
        Redo
      </button>
    </div>
  );
};

export default CanvasActions;
