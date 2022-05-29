import React from "react";
import "./AnotherCssCard.scss";

const AnotherCssCard = () => {
  return (
    <div className="card">
      <h2 className="title">Pink CSS Card</h2>
      <p>
        I'm using <b>CSS</b>. I should be <b>PINK</b> but I'm <b>BLUE</b>{" "}
        instead because of a naming conflict. My class names are also{" "}
        <code>"card"</code> and <code>"title"</code>.
      </p>
    </div>
  );
};

export default AnotherCssCard;
