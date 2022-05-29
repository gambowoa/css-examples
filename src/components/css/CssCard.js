import React from "react";
import "./CssCard.scss";

const CssCard = () => {
  return (
    <div className="card">
      <h2 className="title">CSS Card</h2>
      <p>
        I'm using <b>CSS</b>. I should be <b>BLUE</b>. My class names are{" "}
        <code>"card"</code> and <code>"title"</code>.
      </p>
    </div>
  );
};

export default CssCard;
