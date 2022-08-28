import React from "react";
import HappyClients from "./HappyClients/HappyClients";
import LatestProjects from "./LatestProjects/LatestProjects";

import Slide from "./Slide";
import Whatwedo from "./WhatWeDo.js/Whatwedo";

const Home = () => {
  return (
    <div>
      {/* <Slide /> */}
      <Whatwedo />
      <LatestProjects />
      <HappyClients />
    </div>
  );
};

export default Home;
