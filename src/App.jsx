import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

import "./App.css";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <Navbar />
        <MainSection />
      </div>
      <footer id="navbar">
        <Navbar />
      </footer>
    </>
  );
}

export default App;
