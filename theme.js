import { createTheme, TextField } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    lineHeight: "1.15",

    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: "600",
    },

    body2: {
      fontSize: "1rem",
    },
  },
  palette:{
    primary: {
      main:'#61DBFB'
    },
    secondary:green,
   
   
  }

  

});

export default theme