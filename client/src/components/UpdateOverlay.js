import React, { useState } from "react";
import { TextareaAutosize, Button, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { updateCardItems } from "../utils/api";

const style = {
  textarea: { resize: "none", overflow: "hidden" },
  container: {
    position: "absolute",
    height: "calc(100% - 50px)",
    width: "100%",
  },
};

const UpdateOverlay = ({ overlayVar, setOverlay, overlay }) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await updateCardItems({ ...overlayVar, value });
    setOverlay(!overlay);
  };
  return (
    <div className="update-overlay-container" style={style.container}>
      <div
        className="relative-container"
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
            transform: `translate3d(${overlayVar.x}px,${overlayVar.y}px,0)`,
            position: "absolute",
            zIndex: 30,
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="textarea-container">
              <TextareaAutosize
                onChange={(ev) => {
                  setValue(ev.target.value);
                }}
                value={value}
                rowsMin={7}
                rowsMax={9}
                cols={40}
                style={style.textarea}
              />
            </div>

            <Button type="submit" color="secondary" variant="contained">
              Save
            </Button>
            <IconButton
              onClick={() => {
                setOverlay(!overlay);
              }}
              style={{ background: "#e5e5e5" }}
            >
              <Close />
            </IconButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOverlay;
