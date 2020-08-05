import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBoard } from "../utils/api";
import TodoCard from "../components/TodoCard";
import { Grid, IconButton, Button, TextField, Paper } from "@material-ui/core";
import Header from "../components/Header/Header";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
function Boards() {
  let { user, boardName } = useParams();
  const [toggle, setToggle] = useState(false);

  const handleButtonToggle = (ev) => {
    setToggle((prevState) => !prevState);
  };

  const handleListNameSubmit = (ev) => {
    ev.preventDefault();
  };
  useEffect(() => {
    getBoard(boardName, user);
  }, []);
  return (
    <section
      className="boards"
      style={{ backgroundColor: "rgb(75, 191, 107)", height: "100%" }}
    >
      <Header />
      <Grid container spacing={1}>
        <Grid item md={3}>
          <TodoCard />
        </Grid>
        <Grid item md={2}>
          {!toggle ? (
            <Button
              onClick={handleButtonToggle}
              style={{ backgroundColor: "hsla(0,0%,100%,.24)" }}
              fullWidth
            >
              <AddIcon />
              Add a list
            </Button>
          ) : (
            <Paper style={{ backgroundColor: "#ebecf0", padding: 10 }}>
              <form>
                <TextField
                  placeholder="Enter a list name"
                  variant="outlined"
                  fullWidth
                />
                <Button style={{ backgroundColor: "#5aac44", color: "#fff" }}>
                  Add
                </Button>
                <IconButton onClick={handleButtonToggle}>
                  <CloseIcon />
                </IconButton>
              </form>
            </Paper>
          )}
        </Grid>
      </Grid>
    </section>
  );
}

export default Boards;
