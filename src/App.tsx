import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import LocationItemDetails from "./pages/LocationItemDetails/LocationItemDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
          <Route
            path="/locations/:locationId"
            element={<LocationItemDetails />}
          ></Route>
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
