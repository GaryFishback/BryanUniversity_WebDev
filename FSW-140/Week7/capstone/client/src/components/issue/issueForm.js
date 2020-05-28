import React, { useState } from "react";
//material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const initInputs = {
  title: "",
  description: "",
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
    console.log(props);
    console.log(inputs);
    addIssue(inputs);

    // let date = new Date();
    // let brokendate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    // inputs.date = new Date();

    // props.newIssue(inputs);
    // var inputs = document.get
  }

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
        {/* <CssBaseline /> */}
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

            <Grid container></Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
