import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // ! importing react-bootstap css

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
