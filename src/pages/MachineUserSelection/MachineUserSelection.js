import React from "react";
import Header from "../../components/HOC/Header/Header";
import styles from "./MachineUserSelection.module.css";

const MachineUserSelection = () => {
  return (
    <>
      <Header title="Machine User Selection" />
      <div class={styles.mainWrapper}>
        <div>
          <button>Supervisor</button>
          <button>Operator</button>
        </div>
        <button>Maintenance</button>
      </div>
    </>
  );
};

export default MachineUserSelection;
