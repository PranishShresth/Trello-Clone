import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { reOrderCardItems, addNewCard } from "../utils/api";
import TodoCard from "../components/TodoCard";
import { Grid, IconButton, Button, TextField, Paper } from "@material-ui/core";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import UpdateOverlay from "../components/UpdateOverlay";

import { getSpecificBoard } from "../actions/index";
import axios from "axios";
import "./Boards.css";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Boards({ login, getOneBoard, boards: { specificBoard } }) {
  const [cardName, setCardName] = useState("");
  let { boardName } = useParams();
  const [overlay, setOverlay] = useState(false);

  const [mousePos, setMousePos] = useState({
    x: null,
    y: null,
  });

  const [toggle, setToggle] = useState(false);

  const getMousePos = (x, y) => {
    setMousePos({ x, y });
  };

  const handleButtonToggle = (ev) => {
    setToggle((prevState) => !prevState);
  };

  const getSpecificBoard = () => {
    getOneBoard(boardName);
  };

  useEffect(() => {
    getOneBoard(boardName);
  }, []); //fires when cards changes

  //handling input change
  const handleInputChange = (ev) => {
    setCardName(ev.target.value);
  };

  //handling submit
  const handleCardNameSubmit = async (ev) => {
    ev.preventDefault();
    await addNewCard({ boardName: boardName, name: cardName });
    await getOneBoard(boardName);
  };
  const onDragEnd = async (result) => {
    const { destination, draggableId, source } = result;
    if (!destination) return;
    const payload = {
      destination: destination.droppableId,
      itemId: draggableId,
      source: source.droppableId,
    };

    await getOneBoard(boardName);
  };

  return (
    <section
      className="boards"
      style={{
        backgroundColor: `${specificBoard.backgroundColor}`,
        height: "100%",
      }}
    >
      <Header />
      {overlay && (
        <UpdateOverlay
          mousePos={mousePos}
          setOverlay={setOverlay}
          overlay={overlay}
        />
      )}

      <div className="boards-container">
        <DragDropContext onDragEnd={onDragEnd}>
          {specificBoard.cards &&
            specificBoard.cards.map((x) => {
              return (
                <div className="board-cards" key={`${x._id}`} item>
                  <TodoCard
                    setOverlay={setOverlay}
                    updateBoards={getSpecificBoard}
                    mousePos={getMousePos}
                    card={x}
                  />
                </div>
              );
            })}
        </DragDropContext>

        {!toggle ? (
          <div className="board-cards">
            <Button
              onClick={handleButtonToggle}
              style={{ backgroundColor: "hsla(0,0%,100%,.24)" }}
              fullWidth
            >
              <AddIcon />
              Add a list
            </Button>
          </div>
        ) : (
          <div className="board-cards">
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
          </div>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = ({ login, boards }) => ({
  login,
  boards,
});
const mapDispatchToProps = (dispatch) => ({
  getOneBoard: (payload) => {
    dispatch(getSpecificBoard(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Boards);
