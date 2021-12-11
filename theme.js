import { createTheme, TextField } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    lineHeight: "1.15",
    h1: {
      fontSize: "53px",
      // fontFamily: "Josefin+Sans",
      lineHeight: "81.98px",
      letterSpacing: ".015em",
    },
    h2: {
      fontSize: "42px",
      // fontFamily: "Josefin+Sans",
      lineHeight: "49.22px",
      letterSpacing: ".015em",
    },
    h3: {
      fontSize: "35px",
      // fontFamily: "Josefin+Sans",
      lineHeight: "46.2px",
      letterSpacing: ".015em",
    },
    h4: {
      fontSize: "34px",
      // fontFamily: "Josefin+Sans",
      fontWeight: "700",
      lineHeight: "34px",
    },
    h5: {
      fontSize: "26px",
      // fontFamily: "Josefin+Sans",
      fontWeight: "600",
      lineHeight: "26px",
    },
    subtitle1: {
      fontSize: "16px",
      // fontFamily: "lato",
      lineHeight: "20px",
      // fontFamily: "Josefin+Sans",
    },
    subtitle2: {
      fontSize: "22px",
      // fontFamily: "Josefin+Sans",
      lineHeight: "25.78px",
    },
    body1: {
      fontSize: "18px",
      // fontFamily: "lato",
      fontWeight: "700",
      lineHeight: "21.6px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "10.75px",
      // fontFamily: "Josefin+Sans",
    },
  },
  palette: {
    primary: {
      main: "#61DBFB",
    },
    secondary: green,
  },
});

export default theme;
