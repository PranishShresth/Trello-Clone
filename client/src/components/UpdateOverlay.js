import React from "react";
import { TextareaAutosize, Button } from "@material-ui/core";

const style = {
  textarea: { resize: "none", overflow: "hidden" },
  container: {
    position: "absolute",
    height: "calc(100% - 50px)",
    width: "100%",
  },
};

const UpdateOverlay = ({ mousePos: { x, y }, setOverlay, overlay }) => {
  return (
    <div className="update-overlay-container" style={style.container}>
      <div
        className="relative-container"
        onClick={() => {
          setOverlay(!overlay);
        }}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        // onClick={handleMousePos}
      >
        <div
          className="update-overlay"
          style={{
            transform: `translate3d(${x}px,${y}px,0)`,
            position: "absolute",
            zIndex: 30,
          }}
        >
          <div className="textarea-container">
            <TextareaAutosize
              rowsMin={7}
              rowsMax={9}
              cols={40}
              style={style.textarea}
            />
          </div>

          <Button color="secondary" variant="contained">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOverlay;
