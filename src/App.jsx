import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Bridge from "./pages/Bridge";
import Docs from "./pages/Docs";
import Stats from "./pages/Stats";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
