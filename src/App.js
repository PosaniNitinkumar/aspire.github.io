import "./styles/globals.css";

//INTRNAL IMPORT
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Explore } from "./collection/collectionIndex";
import { Provider } from "./context/Context";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/collection" element={<Explore />} /> */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}
export default MyApp;
