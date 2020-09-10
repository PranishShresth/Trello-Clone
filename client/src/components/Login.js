import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { loginUser } from "./../actions/index";
import { FormHelperText } from "@material-ui/core";
import GoogleLogin from "react-google-login";

function Login({ loginUser, login }) {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const handleInputChange = (ev) => {
    ev.persist();
    setLoginValues((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };

  const responseGoogleSuccess = async (response) => {
    loginUser(response.profileObj);
  };
  const responseGoogleError = async (response) => {
    console.log(response);
  };
  const handleLoginSubmit = (ev) => {
    ev.preventDefault();
    loginUser(loginValues);
  };
  return (
    <Grid container>
      <form onSubmit={handleLoginSubmit} style={{ width: "100%" }}>
        <Typography variant="h4" component="div">
          <Box fontStyle="normal" my={4}>
            Log in
          </Box>
        </Typography>
        <Grid item xs={12}>
          <TextField
            value={loginValues.email}
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
            value={loginValues.password}
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
        <FormHelperText style={{ color: "red" }}>{login.error}</FormHelperText>
        <Grid item xs={12}>
          <Button type="submit" color="primary" variant="contained" fullWidth>
            Log in
          </Button>
        </Grid>
        <br />
        <Grid item sx={12}>
          <GoogleLogin
            style={{ width: "100%" }}
            render={(renderProps) => (
              <Button
                style={{ width: "100%" }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
                color="secondary"
              >
                Sign in with Google
              </Button>
            )}
            clientId="937632957539-rgj6ua135uhqo0lnuejibuted9ht71ta.apps.googleusercontent.com"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleError}
            cookiePolicy={"single_host_origin"}
          />
        </Grid>
      </form>
    </Grid>
  );
}

const mapStateToProps = ({ login }) => ({
  login,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => {
    dispatch(loginUser(payload));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
