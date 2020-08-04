import React, { useEffect } from "react";
import { Grid, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CreateBoard from "./../components/CreateBoard";
import { connect } from "react-redux";
import { getAllBoards } from "../actions/index";
import { useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "40px 10%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "40px 0",
    },
  },
  sideBar: {
    minWidth: "100px",
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
      color: "black",
    },
  },
}));

function MainPage({ login, getAllBoards }) {
  const { user } = useParams();
  const classes = useStyles();

  useEffect(() => {
    getAllBoards(user);
  }, []);
  return (
    <>
      <main style={{ height: "100%", position: "relative" }}>
        <div className={classes.mainContainer}>
          <div className={classes.sideBar}>
            <ul>
              <li>Boards</li>
            </ul>
          </div>
          <Grid container spacing={2}>
            <Grid item md={2} className={classes.gridItems}>
              <Paper elevation={3} className={classes.paper}>
                <Link
                  to="/"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></Link>
                My Board
              </Paper>
            </Grid>

            <Grid item md={2} className={classes.gridItems}>
              <CreateBoard />
            </Grid>
          </Grid>
        </div>
      </main>
    </>
  );
}
const mapStateToProps = ({ login }) => ({
  login,
});
const mapDispatchToProps = (dispatch) => ({
  getAllBoards: (payload) => {
    dispatch(getAllBoards(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
