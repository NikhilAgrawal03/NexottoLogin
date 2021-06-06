import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    marginLeft: "10px",
    marginTop: "8px",
    backgroundColor: "#1a73e8",
    color: "#FFFFFF",
  },
});

const SubmitSnackbar = ({ userAuth, onSubmit }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        Submit
      </Button>
      {userAuth && onSubmit ? (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Login Success"
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default SubmitSnackbar;
