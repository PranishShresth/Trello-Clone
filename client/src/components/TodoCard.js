import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";

function TodoCard() {
  return (
    <Card>
      <CardHeader subheader="Todo" />
      <CardContent>
        <TextField fullWidth />
        <Paper square variant="outlined">
          <Typography variant="body2" color="textSecondary" component="p">
            Paper
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Paper
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Paper
          </Typography>
        </Paper>
      </CardContent>
    </Card>
  );
}

export default TodoCard;
