import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBoard } from "../utils/api";
import getJwtToken from "../utils/jwt";
import TodoCard from "../components/TodoCard";
import { Grid, IconButton, Button, TextField, Paper } from "@material-ui/core";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { addNewCard } from "../utils/api";
import axios from "axios";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Boards({ login }) {
  const [cardName, setCardName] = useState("");
  let { boardName } = useParams();
  const [cards, setCards] = useState([{}]);
  const [toggle, setToggle] = useState(false);

  const handleButtonToggle = (ev) => {
    setToggle((prevState) => !prevState);
  };

  //when the component first mounts
  async function getSpecificBoard() {
    const config = {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let board = await axios.get(
      `http://localhost:5000/api/board/${boardName}`,
      config
    );
    const cards = await board.data;
    setCards(cards.cards);
  }
  useEffect(() => {
    getSpecificBoard();
  }, []); //fires when cards changes

  //handling input change
  const handleInputChange = (ev) => {
    setCardName(ev.target.value);
  };

  //handling submit
  const handleCardNameSubmit = async (ev) => {
    ev.preventDefault();
    await addNewCard({ boardName: boardName, name: cardName });
    await getSpecificBoard();
  };
  const onDragEnd = async (result) => {
    const { destination, draggableId, source } = result;
    if (!destination) return;

    const config = {
      headers: {
        Authorization: "Bearer " + getJwtToken(),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    console.log(result);
    await axios.put(
      "http://localhost:5000/api/board/card/reorder",
      {
        destination: destination.droppableId,
        itemId: draggableId,
        source: source.droppableId,
      },
      config
    );
    await getSpecificBoard();
  };

  return (
    <section
      className="boards"
      style={{
        backgroundColor: "rgb(75, 191, 107)",
        minHeight: "100%",
        height: "auto",
      }}
    >
      <Header />
      <Grid container spacing={1} style={{ padding: 10 }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {cards &&
            cards.map((x) => {
              return (
                <Grid key={`${x._id}`} item>
                  <TodoCard updateBoards={getSpecificBoard} card={x} />
                </Grid>
              );
            })}
        </DragDropContext>

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
              <form onSubmit={handleCardNameSubmit}>
                <TextField
                  placeholder="Enter a list name"
                  variant="outlined"
                  fullWidth
                  value={cardName}
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  style={{ backgroundColor: "#5aac44", color: "#fff" }}
                >
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

const mapStateToProps = ({ login }) => ({
  login,
});
export default connect(mapStateToProps, null)(Boards);
