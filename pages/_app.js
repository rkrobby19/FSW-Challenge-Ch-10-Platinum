import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ! importing react-bootstap css
import { Provider } from "react-redux";
import { myStore } from "../redux/store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={myStore}>
            <Component {...pageProps} />;
        </Provider>
    );
}

export default MyApp;
