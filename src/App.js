import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/";
import Carousel from "./components/elements/Carousel/Carousel";
import { SectionLayout } from "./components/layout/index";
import imgsc from "./assets/dish.jpg";
import altpic1 from "./assets/bg2.jpg";
import altpic2 from "./assets/bg3.jpg";
import altpic3 from "./assets/bg4.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionLayout imgsrc={[imgsc, altpic1, altpic2, altpic3]} />

      <Carousel />
    </div>
  );
}

export default App;
