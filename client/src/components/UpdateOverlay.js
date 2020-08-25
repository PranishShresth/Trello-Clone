import React, { useState } from "react";
import { TextareaAutosize, Button, IconButton } from "@material-ui/core";
import { Close, DeleteForever } from "@material-ui/icons";
import { updateCardItems, deleteCardItems } from "../utils/api";
import { green, red, pink } from "@material-ui/core/colors";

const style = {
  textarea: {
    resize: "none",
    overflow: "hidden",
    borderImage: "none",
    borderRadius: "6px 6px 6px 6px",
    borderStyle: "none solid solid none",
    borderWidth: "medium 1px 1px medium",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12) inset",
    color: "#555555",
    fontSize: "1.2em",
    lineHeight: "1.4em",
    padding: "5px 8px",
  },
  container: {
    position: "absolute",
    height: "calc(100% - 50px)",
    width: "100%",
  },
};

const UpdateOverlay = ({
  overlayVar,
  setOverlay,
  overlay,
  getSpecificBoard,
}) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await updateCardItems({ ...overlayVar, value });
    await getSpecificBoard();
    setOverlay(!overlay);
  };

  const handleDelete = async (ev) => {
    ev.preventDefault();
    await deleteCardItems({ ...overlayVar });
    await getSpecificBoard();
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
            transform: `translate3d(${overlayVar.x}px,${
              overlayVar.y - 40
            }px,0)`,
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
                rowsMin={5}
                rowsMax={7}
                cols={30}
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
            >
              <Close style={{ color: red[500] }} />
            </IconButton>
          </form>
          <form onSubmit={handleDelete}>
            <Button type="submit" color="secondary">
              <DeleteForever style={{ color: red[500] }} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOverlay;
