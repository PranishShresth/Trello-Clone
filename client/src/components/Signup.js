import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import { RegisterUser } from "../actions/index";
import { connect } from "react-redux";

function Signup({ RegisterNewUser }) {
  const [signup, setSignUp] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const handleInputChange = (ev) => {
    ev.persist();
    setSignUp((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    RegisterNewUser(signup);
  };
  return (
    <Grid container>
      <Typography variant="h4" component="div">
        <Box fontStyle="normal" my={4}>
          Register
        </Box>
      </Typography>
      <br />
      <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
        <Grid item xs={12}>
          <TextField
            onChange={handleInputChange}
            placeholder="Type your username here"
            name="username"
            label="Username"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            inputProps={{
              minLength: 3,
              maxLength: 20,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleInputChange}
            placeholder="Type your email here"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={handleInputChange}
            placeholder="Type your password here"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={handleInputChange}
            placeholder="Re-type your password here"
            label="Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            margin="normal"
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Register
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
const mapDispatchToProps = (dispatch) => ({
  RegisterNewUser: (payload) => {
    dispatch(RegisterUser(payload));
  },
});
export default connect(null, mapDispatchToProps)(Signup);
