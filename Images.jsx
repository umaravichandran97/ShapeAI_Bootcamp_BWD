import React from "react";
import Img from "./react.jpg";

function Images() {
  return (
    <div className="image">
      <img src={Img} width="150" height="150" alt="pic" />
    </div>
  );
}

export default Images;
