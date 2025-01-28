import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Green from "./Green";
import Home from "./Home";

export default function MainSection() {
    return (
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/green" element={<Green />} />
        </Routes>
      </div>
    );
}