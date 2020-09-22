import React, { useEffect } from "react";
import { Grid, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import CreateBoard from "./../components/CreateBoard";
import { connect } from "react-redux";
import { getAllBoards } from "../actions/index";
import { useParams } from "react-router-dom";
import { Home, Dashboard } from "@material-ui/icons";
import Header from "../components/Header/Header";
import "./MainPage.css";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "40px 10%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
  },
  boardsContainer: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  sideBar: {
    minWidth: "200px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    "& ul": {
      listStyleType: "none",
      marginRight: "20px",
      "& li": {
        padding: "10px 0",
        backgroundColor: "#e4f0f6",
        margin: "0px 3px 3px 5px",
        borderRadius: "5px",
        "& a": {
          textDecoration: "none",
          color: "#0079bf",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
  gridItems: {
    minHeight: "100px",
    minWidth: "200px",
    margin: "10px 10px",
  },
  paper: {
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(9,30,66,.04)",
      transition: "all 85ms ease",
    },
    "& a": {
      textDecoration: "none",
      textAlign: "center",
    },
  },
}));

function MainPage({ login, getAllBoards, boards, location }) {
  const { user } = useParams();
  const classes = useStyles();
  useEffect(() => {
    document.title = "Home | " + user;
    getAllBoards(user);
  }, [user]);

  return (
    <>
      <Header />
      <main style={{ height: "100%", position: "relative" }}>
        <div className={classes.mainContainer}>
          <div className={classes.sideBar}>
            <ul>
              <li>
                <NavLink to={`/home/${user}`}>
                  <Dashboard />
                  Boards
                </NavLink>
              </li>
              <li>
                <NavLink to={`/home/${user}`}>
                  <Home />
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <Grid container spacing={0} className={classes.boardsContainer}>
            {boards.map((board) => {
              return (
                <Grid
                  key={board._id}
                  item
                  md={2}
                  sm={6}
                  xs={10}
                  className={classes.gridItems}
                >
                  <Paper
                    elevation={3}
                    style={{ backgroundColor: `${board.backgroundColor}` }}
                    className={classes.paper}
                  >
                    <Link
                      to={`/boards/${board.name}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <Typography
                      style={{ color: "white", fontWeight: 1000 }}
                      component="h2"
                    >
                      {board.name}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}

            <Grid item md={2} sm={6} xs={10} className={classes.gridItems}>
              <CreateBoard getAllBoards={getAllBoards} />
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}
const mapStateToProps = ({ login, boards, router }) => ({
  login,
  boards: boards.boards,
  location: router,
});
const mapDispatchToProps = (dispatch) => ({
  getAllBoards: (payload) => {
    dispatch(getAllBoards(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
