import React from "react";
import styles from "./TableRowComponent.module.css";

const TableRowComponent = ({
  tableRowLeftHeading,
  isChecked,
  InputValue,
  value,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span>{tableRowLeftHeading}</span>
      </div>
      <div className={styles.rightBox}>
        {InputValue ? (
          <>
            {!isChecked ? (
              <>
                <div className={styles.offToggle} onClick={onClick}>
                  <div className={styles.switcher}></div>
                </div>
                <span>OFF</span>
              </>
            ) : (
              <>
                <div className={styles.onToggle} onClick={onClick}>
                  <div className={styles.switcher}></div>
                </div>
                <span>ON</span>
              </>
            )}
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
};

export default TableRowComponent;
