import React from "react";
import styles from "./WindingParameterTableRow.module.css";

const WindingParameterTableRow = ({ pink, yellow, value, smallValue }) => {
  return (
    <div className={styles.container}>
      <div className={pink ? styles.innerDataPink : styles.innerDataBlue}>
        <span>{smallValue}</span>
      </div>
      <div className={yellow ? styles.dataYellow : styles.dataBlue}>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default WindingParameterTableRow;
