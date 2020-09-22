import React, { useState, useEffect } from "react";
import {
  TextareaAutosize,
  Button,
  IconButton,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import { Close, DeleteForever } from "@material-ui/icons";
import { updateCardItems, deleteCardItems } from "../utils/api";
import { green, red, pink } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

import "rodal/lib/rodal.css";
import "./UpdateOverlay.css";

const style = {
  textarea: {
    width: 240,
    height: 90,
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
  modal_body: {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
};
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    outline: "none",
  },
}));

const UpdateOverlay = ({
  overlayVar,
  setOverlay,
  overlay,
  getSpecificBoard,
}) => {
  //states
  const [value, setValue] = useState("");
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  //handler functions
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
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={overlay}
        onClose={() => {
          setOverlay(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={overlay}>
          <div
            style={{
              transform: `translate3d(${0}px,${overlayVar.y - 250}px,0)`,
              position: "absolute",
              outline: "none",
              border: "none",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="textarea-container">
                <TextareaAutosize
                  onChange={(ev) => {
                    setValue(ev.target.value);
                  }}
                  value={value}
                  style={style.textarea}
                />
              </div>

              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </form>
            <div
              className="update_options"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <form onSubmit={handleDelete}>
                <Button type="submit" color="secondary">
                  <DeleteForever style={{ color: red[500] }} />
                </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
      {/* <div className="update-overlay-container" style={style.container}>
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
              display: "flex",
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
            </form>
            <div
              className="update_options"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <form onSubmit={handleDelete}>
                <Button type="submit" color="secondary">
                  <DeleteForever style={{ color: red[500] }} />
                </Button>
              </form>
              <IconButton
                onClick={() => {
                  setOverlay(!overlay);
                }}
              >
                <Close style={{ color: red[500] }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UpdateOverlay;
