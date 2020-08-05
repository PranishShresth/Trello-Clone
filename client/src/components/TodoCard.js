import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Paper,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

function TodoCard() {
  return (
    <Card style={{ backgroundColor: "#ebecf0" }}>
      <CardHeader subheader="Todo" />
      <CardContent>
        <Paper square variant="outlined" style={{ padding: 10, marginTop: 5 }}>
          <Typography component="div">
            <Box textAlign="justify">First Todo</Box>
          </Typography>
        </Paper>
        <Paper square variant="outlined" style={{ padding: 10 }}>
          <Typography component="div">
            <Box textAlign="justify">First Todo</Box>
          </Typography>
        </Paper>
        <Paper square variant="outlined" style={{ padding: 10 }}>
          <TextField fullWidth label="Add new todo" />
        </Paper>
      </CardContent>
    </Card>
  );
}

export default TodoCard;
