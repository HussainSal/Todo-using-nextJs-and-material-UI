import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
