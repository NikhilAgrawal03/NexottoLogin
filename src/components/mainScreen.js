import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button, Typography } from "@material-ui/core";
import {
  getnexottologindetails,
  nexottoAuthenticate,
} from "../actions/nexottoLoginActions";
import Grid from "@material-ui/core/Grid";
import logo from "../assets/logoNew.png";
import SubmitSnackbar from "./snackbar";
import "../App.css";

const textfieldStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "35px",
    marginBottom: "123px",
    width: "100%",
    height: "100%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const useStyles = makeStyles({
  gridMain: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    width: "inherit",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: "10px",
  },
  logoImg: {
    marginTop: "15px",
    justifyContent: "center",
  },
  cardMain: {
    width: "100%",
    justifyContent: "center",
    fontSize: "15px",
    display: "flex",
    border: "none",
  },
  cardTitle: {
    justifyContent: "center",
    display: "flex",
    color: "dark",
  },
  cardButton: {
    backgroundColor: "#1a73e8",
    marginLeft: "10px",
    marginTop: "8px",
    float: "right",
  },
  linkTypo: {
    float: "left",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#1a73e8",
  },
  cardEmail: {
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: "1px",
    borderRadius: "10px",
    width: "fit-content",
    padding: "3px",
    fontWeight: "bold",
    margin: "auto",
  },
});

const NexottoLoginScreen = () => {
  const textclasses = textfieldStyles();
  const classes = useStyles();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const dispatch = useDispatch();

  const userNexottoLogin = useSelector((state) => state.userNexottoLogin);
  const { loading, error, user } = userNexottoLogin;

  const userNexottoAuth = useSelector((state) => state.userNexottoAuth);
  const { userAuthInfo } = userNexottoAuth;

  const submitLoginHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    //dispatch nexotto login
    dispatch(getnexottologindetails());
    setemail("");
  };

  const submitAuthHandler = async (e) => {
    e.preventDefault();
    console.log(user);
    //dispatch nexotto auth
    dispatch(nexottoAuthenticate(email, password));
    setpassword("");
  };

  return (
    <div
      className={textclasses.root}
      style={{ justifyContent: "center", display: "flex" }}
    >
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <>
          <Grid container className={classes.gridMain}>
            <Grid item md={4} className={classes.gridItem}>
              <Typography component="h3">
                <img
                  src={logo}
                  height="30px"
                  width="120px"
                  alt="company_logo"
                  className={classes.logoImg}
                />
              </Typography>
              <Card variant="outlined" className={classes.cardMain}>
                {!user ? (
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      className={classes.cardTitle}
                    >
                      Sign In
                    </Typography>
                    <form onSubmit={submitLoginHandler}>
                      <FormControl>
                        <TextField
                          id="standard-full-width"
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          label="Email"
                          style={{ margin: 8 }}
                          placeholder="Eg: code@nexotto.com"
                          type="email"
                          margin="normal"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                        />
                      </FormControl>
                      <br />
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.cardButton}
                      >
                        <Typography style={{ color: "#FFFFFF" }}>
                          Next
                        </Typography>
                      </Button>
                    </form>
                    <Typography className={classes.linkTypo}>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        Create Account
                      </Link>
                    </Typography>
                  </CardContent>
                ) : (
                  <CardContent style={{ justifyContent: "center" }}>
                    <br />
                    <Typography
                      gutterBottom
                      variant="h6"
                      className={classes.cardTitle}
                    >
                      Welcome {user.user.firstName} {user.user.lastName}
                    </Typography>

                    <Typography className={classes.cardEmail}>
                      {user.user.email}
                    </Typography>
                    <form onSubmit={submitAuthHandler}>
                      <FormControl>
                        <TextField
                          id="standard-full-width"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          label="Password"
                          style={{ margin: 8 }}
                          placeholder="Password"
                          margin="normal"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                        />
                      </FormControl>
                      <br />

                      <SubmitSnackbar
                        userAuth={userAuthInfo}
                        onSubmit={submitAuthHandler}
                      />
                    </form>
                  </CardContent>
                )}
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default NexottoLoginScreen;
