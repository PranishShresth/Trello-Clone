import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import axios from "axios";
import getJwtToken from "../utils/jwt";

function TodoCard({ card, updateBoards }) {
  const [todo, setTodo] = useState("");
  const handleItemInputChange = (ev) => {
    ev.persist();
    setTodo(ev.target.value);
  };

  const handleItemSubmit = async (ev) => {
    ev.preventDefault();
    const payload = {
      cardId: card._id,
      item: todo,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await axios.post(
      `http://localhost:5000/api/board/card/items`,
      payload,
      config
    );
    await updateBoards();
  };

  return (
    <Card style={{ backgroundColor: "#ebecf0" }}>
      <CardHeader subheader={card.name} />
      <CardContent>
        {card.items &&
          card.items.map((item) => {
            return (
              <Paper
                key={item._id}
                square
                variant="outlined"
                style={{ padding: 10 }}
              >
                <Typography component="div">
                  <Box textAlign="justify">{item.item}</Box>
                </Typography>
              </Paper>
            );
          })}

        <Paper square variant="outlined" style={{ padding: 10 }}>
          <form onSubmit={handleItemSubmit}>
            <TextField
              fullWidth
              label="Add new todo"
              value={todo}
              onChange={handleItemInputChange}
            />
            <br />
            <Button type="submit" variant="contained" color="secondary">
              Add
            </Button>
          </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

export default TodoCard;
