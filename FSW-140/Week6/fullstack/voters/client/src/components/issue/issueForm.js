import React, { useState } from "react";
//material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const initInputs = {
  title: "",
  description: "",
  imgUrl: "",
};

export default function IssueForm(props) {
  const { addIssue, errMsg } = props;
  const [inputs, setInputs] = useState(initInputs);

  let simpleErrArray = [];
  if (errMsg) {
    console.log(errMsg);
    let simpleErr = errMsg.split("Path");

    for (let i = 0; i < simpleErr.length; i++) {
      if (
        errMsg.split("Path")[0].substring(0, 25) ===
          "Issue validation failed: " &&
        i > 0
      ) {
        //console.log(errMsg.split("Path")[i].split('.')[0])
        //console.log(errMsg.split("Path")[0].substring(0,25))
        simpleErrArray.push(errMsg.split("Path")[i].split(".")[0]);
      }
    }
  }
  //console.log(simpleErrArray)
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addIssue(inputs);
    console.log(props);
    console.log(inputs);
    let date = new Date();
    inputs.date = new Date();
    let brokendate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    props.newIssue(inputs);
    setInputs(initInputs);
  }

  const { title, description } = inputs;

  const useNewIssueStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    form: {
      width: "100%", // Fix IE 11 issue.
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classesNewIssue = useNewIssueStyles();

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classesNewIssue.paper}>
          <form className={classesNewIssue.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onBlur={handleChange}
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              onBlur={handleChange}
              required
              fullWidth
              name="description"
              label="Description"
              type="description"
              id="description"
              autoComplete="description"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classesNewIssue.submit}
            >
              Submit Issue
            </Button>
            {simpleErrArray.map((errString) => {
              return (
                <FormControlLabel
                  style={{ color: "red", fontWeight: "bold" }}
                  control={<p>{errString}</p>}
                  // label={errMsg}
                />
              );
            })}

            <Grid container>
              {/* <Grid item>
                <Link
                  href="#"
                  onClick={() => setToggle((prev) => !prev)}
                  variant="body2"
                >
                  {"Not a User - Yet? Sign Up!"}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
