import React from "react";
import { useState } from "react";
import arrow from "../assets/images/arrow.svg";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapsible-button-container" onClick={toggle}>
      <button className="collapsible-button">{props.label}</button>
      <img src={arrow} alt="" />

      <div className={open ? "content-show" : "content-parent"}>
        <div className="collapsible-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
