import React from "react";
import styles from "./MachineOperationComponent.module.css";

const MachineOperationComponent = () => {
  return (
    <div className={styles.container}>
      <h3>Machine Operation:</h3>
      <button>Machine Status</button>
      <button>Machine Cofiguration</button>
      <button>Winding Parameters</button>
    </div>
  );
};

export default MachineOperationComponent;
