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
import { Draggable, Droppable } from "react-beautiful-dnd";
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
    setTodo("");
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 10 * 2,

    transform: isDragging ? "rotate(20deg)" : "",
    margin: `0 0 ${10}px 0`,

    // change background colour if dragging
    background: isDragging ? "red" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 20,
  });

  return (
    <Card style={{ backgroundColor: "#ebecf0" }}>
      <CardHeader subheader={card.name} />
      <Droppable droppableId={`${card._id}`}>
        {(provided) => (
          <CardContent
            {...provided.droppableProps}
            innerRef={provided.innerRef}
          >
            {card.items &&
              card.items.map((item, i) => {
                return (
                  <Draggable
                    draggableId={`${item._id}`}
                    key={`${item._id}`}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <Paper
                          square
                          variant="outlined"
                          style={{ padding: 10 }}
                        >
                          <Typography component="div">
                            <Box textAlign="justify">{item.item}</Box>
                          </Typography>
                        </Paper>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {provided.placeholder}

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
        )}
      </Droppable>
    </Card>
  );
}

export default TodoCard;
