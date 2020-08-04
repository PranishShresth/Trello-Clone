import React, { useState } from "react";
import { CreateNewBoard } from "../utils/api";
import {
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { connect } from "react-redux";
import "./CreateBoard.css";
import CloseIcon from "@material-ui/icons/Close";

function CreateBoard({ login }) {
  const [openBoard, setOpenBoard] = useState(false);
  const [boardName, setBoardName] = useState("");

  const handleOpenBoard = () => {
    setOpenBoard((prevState) => !prevState);
  };

  const handleBoardNameChange = (ev) => {
    setBoardName(ev.target.value);
  };

  const handleBoardSubmit = async (ev) => {
    ev.preventDefault();
    const id = login && login.user._id;
    const body = { boardName, id };
    console.log(body);
    const resp = await CreateNewBoard(body);
  };
  return (
    <>
      <Paper elevation={3} className="paper">
        <div onClick={handleOpenBoard} className="board-overlay"></div>
        Create New Board
      </Paper>
      <div className={openBoard ? "boardOpen" : "boardClose"}>
        <Card
          style={{
            maxHeight: "150px",
            minWidth: "250px",
            marginTop: 40,
          }}
        >
          <CardHeader
            style={{ padding: 10 }}
            subheader="Create your board"
            action={
              <IconButton
                aria-label="close"
                onClick={() => setOpenBoard(false)}
              >
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent style={{ padding: 10 }}>
            <form onSubmit={handleBoardSubmit}>
              <TextField
                name="boardName"
                value={boardName}
                onChange={handleBoardNameChange}
                fullWidth
                label="Board name*"
              />
              <Button color="primary" type="submit">
                Create
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

const mapStateToProps = ({ login }) => ({
  login,
});

export default connect(mapStateToProps, null)(CreateBoard);
