import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple, green } from "@material-ui/core/colors";
import "./Profile.css";

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

const FormButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
}))(Button);

const Profile = ({ login }) => {
  const classes = useStyles();
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
              <form>
                <div className="form-control">
                  <TextField
                    id="outlined-required"
                    label="Username"
                    value={`${login.user.name}`}
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
                    id="outlined-required"
                    label="Bio"
                    value={`${login.user.bio}`}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className="form-control">
                  <FormButton
                    variant="contained"
                    color="primary"
                    style={{ color: "#fff" }}
                    fullWidth
                  >
                    Save
                  </FormButton>
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
export default connect(mapStateToProps, null)(Profile);
