import React, { useEffect } from "react";
import { Grid, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateBoard from "./../components/CreateBoard";
import { connect } from "react-redux";
import { getAllBoards } from "../actions/index";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "40px 10%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
  },
  sideBar: {
    minWidth: "200px",

    "& ul": {
      listStyleType: "none",
      "& li": {
        margin: "10px 0",
        color: "#0079bf",
      },
    },
  },
  gridItems: {
    minHeight: "100px",
    minWidth: "200px",
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
    getAllBoards(user);
    console.log(location);
  }, []);

  return (
    <>
      <Header />
      <main style={{ height: "100%", position: "relative" }}>
        <div className={classes.mainContainer}>
          <div className={classes.sideBar}>
            <ul>
              <li>Boards</li>
              <li>Home</li>
            </ul>
          </div>
          <Grid container spacing={2}>
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
