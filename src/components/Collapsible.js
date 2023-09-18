import React from "react";
import { useState } from "react";
// hook React qui permet de créer et de gérer des références vers des éléments HTML ou des valeurs dans les composants React.
import { useRef } from "react";
import arrow from "../assets/images/arrow.svg";

const Collapsible = (props) => {
  const contentRef = useRef();
  const [open, setOpen] = useState(false);
  // inverse la valeur de open
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="collapsible-button-container" onClick={toggle}>
      <button className="collapsible-button">{props.label}</button>
      {/* change la class en fonction de l'état d'open qui change au clic de la div  */}
      <img src={arrow} alt="" className={open ? "arrow rotate" : "arrow"} />

      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? // à l'ouverture de la collapse on récupère la hauteur exacte de content-parent pour faire fonctionner la transition css
              { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="collapsible-content">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
