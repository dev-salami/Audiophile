import Earphones from "./components/Earphones";
import Speaker from "./components/speaker";
import Headphones from "./components/headphones";
import Features from "./components/features";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import CheckoutForm1 from "./components/checkout";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Features />}></Route> */}
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Headphones" element={<Headphones />}></Route>
        <Route path="/Speakers" element={<Speaker />}></Route>
        <Route path="/Earphones" element={<Earphones />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
