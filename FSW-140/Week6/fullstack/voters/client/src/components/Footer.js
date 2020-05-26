import React from "react";
import { Link } from "react-router-dom";
//material ui
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Link from "@material-ui/core/Link";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // minHeight: "100vh",
  },
  // main: {
  //   marginTop: theme.spacing(8),
  //   marginBottom: theme.spacing(2),
  // },
  footer: {
    padding: theme.spacing(3, 2),
    // marginTop: "auto",
    background:
      "linear-gradient(0deg, rgba(1,6,12,1) 0%, rgba(1,6,82,1) 63%, rgba(1,6,133,1) 82%, rgba(0,5,255,1) 100%)",

    // theme.palette.type === "light"
    //   ? theme.palette.grey[200]
    //   : theme.palette.grey[800],
  },
}));

export default function Footer(props) {
  const { token } = props;
  const classes = useStyles();
  return (
    //   <footer className="footer" style={{ display: "flex", justifyContent: "center", background: "linear-gradient(0deg, rgba(1,6,12,1) 0%, rgba(1,6,82,1) 63%, rgba(1,6,133,1) 82%, rgba(0,5,255,1) 100%)"}}>

    //       {token ? <> <Link style={{ color: "lightblue" }} to="/profile">Profile</Link>
    //           <Link style={{ color: "lightblue" }} to="/issues">Issues</Link></> : <Link style={{ color: "lightblue" }} to="/auth">Login/SignUp</Link>}
    // </footer>
    // <div className={classes.root}>
    // <CssBaseline />
    /* <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {token ? (
            <>
              {" "}
              <Link style={{ color: "lightblue" }} to="/profile">
                Profile
              </Link>
              <Link style={{ color: "lightblue" }} to="/issues">
                Issues
              </Link>
            </>
          ) : (
            <Link style={{ color: "lightblue" }} to="/auth">
              Login/SignUp
            </Link>
          )}
        </Typography>
        {/* <Copyright /> */}
      </Container>
    </footer>
    // </div>
  );
}
