import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBoard } from "../utils/api";
import TodoCard from "../components/TodoCard";
import { Grid } from "@material-ui/core";

function Boards() {
  let { user, boardName } = useParams();
  useEffect(() => {
    getBoard(boardName, user);
  }, []);
  return (
    <section
      className="boards"
      style={{ backgroundColor: "rgb(75, 191, 107)", height: "100%" }}
    >
      <Grid container>
        <Grid item md={3}>
          <TodoCard />
        </Grid>
      </Grid>
      {user} {boardName}
    </section>
  );
}

export default Boards;
