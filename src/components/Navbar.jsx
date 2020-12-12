import React from "react";
import Category from "./category";
import Productbar from "./Productbar";
export default function Navbar() {
  return (
    <div className="navbar">
      <Category />
      <div className="homenav">Home</div>
      <div className="productsnav">
        <Productbar />
      </div>
      <div className="productsnav">Blog</div>
      <div className="productsnav">About</div>
      <div className="productsnav">Contact</div>
    </div>
  );
}
