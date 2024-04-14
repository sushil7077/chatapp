import { Alert as MuiAlert, Snackbar } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Fade from "@mui/material/Fade";
import React from "react";

const Alert = ({
  type = "error",
  message = "This is an error Alert with a scary title.",
  onClose,
  isOpen = false,
}) => {
  return (
    <>
      <Snackbar
        open={isOpen}
        onClose={onClose}
        TransitionComponent={Fade}
        autoHideDuration={3000}
        key={Fade.name}
      >
        <MuiAlert severity={type} onClose={() => onClose()}>
          <AlertTitle>Error</AlertTitle>
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Alert;
