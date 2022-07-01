import Earphones from "./components/Earphones";
import Speaker from "./components/speaker";
import Headphones from "./components/headphones";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Headphones" element={<Headphones />}></Route>
        <Route path="/Speakers" element={<Speaker />}></Route>
        <Route path="/Earphones" element={<Earphones />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
