import classes from "../styles/Index.module.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
// import Login from "./Login";

function Layout(props) {
  return (
    <ThemeProvider theme={theme}>
      <section className={classes.section}>
        <div className={classes.container}>{props.children}</div>
      </section>
    </ThemeProvider>
  );
}

export default Layout;
