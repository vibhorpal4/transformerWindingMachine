import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ condition, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputOrCondition}>
        <h3 className={styles.page_table_heading}>Input or Condition:</h3>
        <div>
          <span>{condition}</span>
        </div>
      </div>
      <div className={styles.alarmAndMessage}>
        <h3 className={styles.page_table_heading}>Alarm and Error:</h3>
        <div>
          <span>{error}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
