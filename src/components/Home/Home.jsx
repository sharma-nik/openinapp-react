import React from "react";
import Upload from "./Upload/Upload";
import Drawer from "./Drawer/Drawer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Drawer />
      <Upload />
    </div>
  );
};

export default Home;
