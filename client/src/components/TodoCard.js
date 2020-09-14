import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import "./TodoCard.css";
import { Add, Close, Edit } from "@material-ui/icons";
import { changeCardTitle } from "./../utils/api";
import { Draggable, Droppable } from "react-beautiful-dnd";
import UpdateOverlay from "./UpdateOverlay";
import { connect } from "react-redux";
import { setSpecificBoards } from "./../actions/index";
import axios from "axios";
import getJwtToken from "../utils/jwt";

function TodoCard({ card, updateBoards, overlayVar, setOverlay, setBoard }) {
  const [todo, setTodo] = useState("");
  const [toggleAddTodo, setToggleAddTodo] = useState(false);
  const [cardTitle, setCardTitle] = useState(card.name);
  const [renderCardTitle, setRenderCardTitle] = useState(false);

  // edit cards
  const handleEditButton = (ev) => {
    var rect = ev.currentTarget.getBoundingClientRect();
    var x = ev.clientX;
    var y = ev.clientY;
    var cardId = card._id;
    var itemId = ev.target
      .closest("div")
      .parentNode.getAttribute("data-rbd-draggable-id");
    overlayVar({
      x,
      y,
      cardId,
      itemId,
    });
    setOverlay(true);
  };

  // card title submit
  const handleCardTitleSubmit = async (ev) => {
    if (ev.which === 13) {
      ev.preventDefault();
      const res = await changeCardTitle({ cardId: card._id, name: cardTitle });
      setRenderCardTitle(false);
      // if (res.status === 200) {
      //   setBoard(res.data);
      // }
    }
  };

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
    transform: isDragging ? "rotate(20deg)" : "rotate(100deg)",
    color: isDragging ? "red" : "black",
    // change background colour if dragging
    // background: isDragging ? "red" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle,
  });
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: 20,
  });

  return (
    <Card
      style={{
        backgroundColor: "#ebecf0",
        maxHeight: "600px",
        width: "auto",
      }}
    >
      {!renderCardTitle ? (
        <Typography
          component="h2"
          variant="h5"
          style={{
            padding: "5px 16px",
            cursor: "pointer",
          }}
          onDoubleClick={() => {
            setRenderCardTitle(!renderCardTitle);
          }}
        >
          {card.name}
        </Typography>
      ) : (
        <form>
          <TextField
            onKeyPress={handleCardTitleSubmit}
            fullWidth
            label="Card Title"
            value={cardTitle}
            onChange={(ev) => {
              setCardTitle(ev.target.value);
            }}
          />
        </form>
      )}

      <Droppable droppableId={`${card._id}`}>
        {(provided) => (
          <CardContent
            {...provided.droppableProps}
            innerRef={provided.innerRef}
            className="todo-cards"
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
                          className="todo-card-item"
                        >
                          <Typography
                            style={{
                              overflowWrap: "break-word",
                              overflow: "hidden",
                            }}
                            component="h5"
                          >
                            {item.item}
                          </Typography>
                          <IconButton
                            id="iconButton"
                            onClick={handleEditButton}
                          >
                            <Edit />
                          </IconButton>
                        </Paper>
                      </div>
                    )}
                  </Draggable>
                );
              })}
            {provided.placeholder}
            {!toggleAddTodo ? (
              <div
                className="card-composer"
                onClick={() => {
                  setToggleAddTodo((prevState) => !prevState);
                }}
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <a href="#" className="card-composer-text">
                  <span>
                    <Add className="card-composer-icon" fontSize="large" />
                  </span>
                  <p> Add a todo </p>
                </a>
              </div>
            ) : (
              <Paper
                style={{
                  padding: 10,
                }}
              >
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
                  <IconButton
                    onClick={() => {
                      setToggleAddTodo((prevState) => !prevState);
                    }}
                  >
                    <Close />
                  </IconButton>
                </form>
              </Paper>
            )}
          </CardContent>
        )}
      </Droppable>
    </Card>
  );
}

const MapDispatchToProps = (dispatch) => ({
  setBoard: (payload) => {
    dispatch(setSpecificBoards(payload));
  },
});
export default connect(null, MapDispatchToProps)(TodoCard);
