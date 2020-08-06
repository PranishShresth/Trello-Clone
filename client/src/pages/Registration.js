import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import TabPanel from "./../components/TabPanel";
import Login from "./../components/Login";
import SignUp from "./../components/Signup";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(def) {
  return {
    id: `registration-${def}`,
    "aria-controls": `registration-${def}`,
  };
}

const useStyles = makeStyles((theme) => ({
  registrationContainer: {
    flexDirection: "row-reverse",
    height: "100%",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  registration: {
    width: "50%",
    minHeight: "600px",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  image: {
    width: "100%",
    height: "100%",
  },
}));
function Registration() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt-token");
    if (jwt) {
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.registrationContainer} style={{}}>
      <div className={classes.registration}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Sign Up" {...a11yProps(0)} />
          <Tab label="Log in" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <SignUp />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Login />
        </TabPanel>
      </div>
      <div style={{ width: "50%", flex: 1 }}>
        <img className={classes.image} src="/assets/form.svg"></img>
      </div>
    </div>
  );
}

export default Registration;
