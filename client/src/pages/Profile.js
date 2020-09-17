import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import GreenButton from "../components/GreenButton";
import "./Profile.css";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { updateCurrentUser } from "../actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const Profile = ({ login, updateUser }) => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState({
    username: "",
    bio: "",
  });
  useEffect(() => {
    setCurrentUser({ username: login.user.name, bio: login.user.bio });
  }, [login.user.name]);

  const handleUpdateSubmit = (ev) => {
    ev.preventDefault();
    updateUser(currentUser);
  };
  return (
    <>
      <Header />
      <div className="profile-container">
        <div className="profile-header">
          <Avatar className={classes.purple}>
            {login.user.name && login.user.name[0]}
            {login.user.name && login.user.name.split(" ")[1][0]}
          </Avatar>
          <Typography variant="h5" component="h3">
            {login.user.name}
          </Typography>
        </div>
        <div className="profile-content">
          <div className="profile-content-container">
            <Typography
              variant="h5"
              component="h4"
              gutterBottom
              style={{ marginBottom: 50 }}
            >
              Manage your personal information
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              About
            </Typography>
            <hr />
            <div className="profile-form-container">
              <form onSubmit={handleUpdateSubmit}>
                <div className="form-control">
                  <TextField
                    id="username"
                    label="Username"
                    value={`${currentUser.username}`}
                    onChange={(ev) => {
                      ev.persist();
                      setCurrentUser((prev) => ({
                        ...prev,
                        username: ev.target.value,
                      }));
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="form-control">
                  <TextField
                    id="bio"
                    label="Bio"
                    value={`${currentUser.bio}`}
                    onChange={(ev) => {
                      ev.persist();
                      setCurrentUser((prev) => ({
                        ...prev,
                        bio: ev.target.value,
                      }));
                    }}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="form-control">
                  <GreenButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ color: "#fff" }}
                    fullWidth
                  >
                    Save
                  </GreenButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ login }) => {
  return { login };
};
const mapDispatchToProps = (dispatch) => ({
  updateUser: (payload) => {
    dispatch(updateCurrentUser(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
