import React from "react";
import styles from "./AnotherCssModuleCard.module.scss";

const AnotherCssModuleCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Pink CSS Module Card</h2>
      <p>
        I'm using <b>CSS</b>. I should be <b>PINK</b>. My class names are also{" "}
        <code>{"{styles.card}"}</code> and <code>{"{styles.title}"}</code>
      </p>
    </div>
  );
};

export default AnotherCssModuleCard;
