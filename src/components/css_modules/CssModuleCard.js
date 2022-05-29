import React from "react";
import styles from "./CssModuleCard.module.scss";

const CssModuleCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>CSS Module Card</h2>
      <p>
        I'm using <b>CSS modules</b>. I should be <b>BLUE</b>. My class names
        are <code>{"{styles.card}"}</code> and <code>{"{styles.title}"}</code>.
        In the browser, these class names will autogenerate with random
        characters to avoid naming conflicts.
      </p>
    </div>
  );
};

export default CssModuleCard;
