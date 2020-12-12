import React from "react";
import CallIcon from "@material-ui/icons/Call";
import { IconButton } from "@material-ui/core";
import SimpleMenu from "./SelectCurrency";
export default function Contact() {
  const currency = ["USD", "Rupees", "Euro"];
  const languages = ["Language", "English", "Hindi", "Gujarati"];
  return (
    <>
      <div className="contact">
        <div className="call">
          <div className="icon">
            <IconButton color="inherit">
              <CallIcon />
            </IconButton>
          </div>
          <h4>Call us: +01900220033</h4>
        </div>
        <div className="menu">
          <div className="dropdown">
            <SimpleMenu list={currency} />
          </div>
          <div className="dropdown">
            <SimpleMenu list={languages} />
          </div>
        </div>
      </div>
    </>
  );
}
