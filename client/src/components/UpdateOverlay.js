import React from "react";
import { TextareaAutosize, Button } from "@material-ui/core";

const UpdateOverlay = () => {
  return (
    <div className="update-overlay-container">
      <TextareaAutosize rowsMin={5} rowsMax={6} />
      <Button />
    </div>
  );
};

export default UpdateOverlay;
