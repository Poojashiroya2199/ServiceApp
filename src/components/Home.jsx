import React, { useState } from "react";
import Contact from "./Contact";
import Divider from "@material-ui/core/Divider";
import { Box } from "@material-ui/core";
import Search from "./Search";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow";
import Service from "./Service";
export default function Home() {
  return (
    <Box>
      <Contact />
      <Divider />
      <Search />
      <Divider />
      <Navbar />
      <Slideshow />
      <Service />
    </Box>
  );
}
