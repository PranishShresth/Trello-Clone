import React, { useState, useRef } from "react";
import { CreateNewBoard } from "../utils/api";
import {
  Paper,
  TextField,
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { connect } from "react-redux";
import "./CreateBoard.css";
import CloseIcon from "@material-ui/icons/Close";

function CreateBoard({ login, getAllBoards }) {
  const [openBoard, setOpenBoard] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [boardColor, setBoardColor] = useState("rgb(0, 121, 191)");
  const cardRef = useRef(null);

  const handleOpenBoard = () => {
    setOpenBoard((prevState) => !prevState);
  };

  const handleBoardNameChange = (ev) => {
    setBoardName(ev.target.value);
  };

  const handleColorChange = (ev) => {
    cardRef.current.style.backgroundColor = ev.target.style.backgroundColor;
    setBoardColor(ev.target.style.backgroundColor);
  };
  const handleBoardSubmit = async (ev) => {
    ev.preventDefault();
    await CreateNewBoard({ boardName, boardColor });
    await getAllBoards(login.user.name);
  };
  return (
    <>
      <Paper elevation={3} className="paper">
        <div onClick={handleOpenBoard} className="board-overlay"></div>
        Create New Board
      </Paper>
      <div className={openBoard ? "boardOpen" : "boardClose"}>
        <form onSubmit={handleBoardSubmit} className="form-container">
          <Card
            style={{
              maxHeight: "140px",
              minWidth: "300px",
              margin: 20,
              color: "white",
            }}
          >
            <CardHeader
              style={{ padding: 0, color: "white" }}
              subheader="Create your board"
              action={
                <IconButton
                  aria-label="close"
                  onClick={() => setOpenBoard(false)}
                  ref={cardRef}
                >
                  <CloseIcon />
                </IconButton>
              }
            />
            <CardContent style={{ padding: 10 }}>
              <TextField
                name="boardName"
                value={boardName}
                onChange={handleBoardNameChange}
                fullWidth
                label="Board name*"
              />
            </CardContent>
            <Button color="primary" variant="contained" type="submit">
              Create
            </Button>
          </Card>

          <div
            style={{
              height: "96px",
              marginTop: "20px",
              width: "100px",
            }}
          >
            <div className="background-grid">
              <div className="background-grid-items">
                <button
                  type="button"
                  className="background-button"
                  onClick={handleColorChange}
                  style={{ backgroundColor: "rgb(176, 70, 50)" }}
                ></button>
              </div>
              <div className="background-grid-items">
                <button
                  type="button"
                  className="background-button"
                  onClick={handleColorChange}
                  style={{ backgroundColor: "rgb(0, 121, 191)" }}
                ></button>
              </div>
              <div className="background-grid-items">
                <button
                  onClick={handleColorChange}
                  type="button"
                  className="background-button"
                  style={{ backgroundColor: "rgb(210, 144, 52)" }}
                ></button>
              </div>
              <div className="background-grid-items">
                <button
                  type="button"
                  className="background-button"
                  onClick={handleColorChange}
                  style={{ backgroundColor: "rgb(81, 152, 57)" }}
                ></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = ({ login }) => ({
  login,
});

export default connect(mapStateToProps, null)(CreateBoard);
