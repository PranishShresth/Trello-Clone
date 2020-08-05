import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBoard } from "../utils/api";
import TodoCard from "../components/TodoCard";
import { Grid, IconButton, Button, TextField, Paper } from "@material-ui/core";
import Header from "../components/Header/Header";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { addNewCard } from "../utils/api";

function Boards({ login }) {
  const [cardName, setCardName] = useState("");
  let { boardName } = useParams();
  const [cards, setCards] = useState([{}]);
  const [toggle, setToggle] = useState(false);

  const handleButtonToggle = (ev) => {
    setToggle((prevState) => !prevState);
  };

  const handleInputChange = (ev) => {
    setCardName(ev.target.value);
  };
  const handleCardNameSubmit = async (ev) => {
    ev.preventDefault();
    await addNewCard({ boardName: boardName, name: cardName });
  };
  useEffect(() => {
    getOneBoard(boardName).then((res) => setCards(res.data.cards));
  }, []);
  return (
    <section
      className="boards"
      style={{ backgroundColor: "rgb(75, 191, 107)", height: "100%" }}
    >
      <Header />

      <Grid container spacing={1}>
        <Grid item md={3}>
          {/* {cards &&
            cards.map((x) => {
              return <TodoCard cardName={x.name} />;
            })} */}
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
