import { useState } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/home.jsx";
import { DunesStory } from "./components/duneshome.jsx";
import { Header } from "./components/header.jsx";
import { Footer } from "./components/footer.jsx";
import { CrystalpunkStory } from "./components/crystalpunkstory.jsx";
import { MainPage } from "./components/mainpage.jsx";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<MainPage />} />
          <Route path="/dunesstory" element={<DunesStory />} />
          <Route path="/cpstory" element={<CrystalpunkStory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
