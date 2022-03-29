import React, { useState } from "react";
import Header from "../../components/HOC/Header/Header";
import styles from "./MachineStatus.module.css";
import Footer from "../../components/HOC/Footer/Footer";
import TableRowComponent from "../../components/TableRowComponent/TableRowComponent";

const MachineStatus = () => {
  const [isMachineFan, setIsMachineFan] = useState(false);
  return (
    <>
      <Header title="Machine Status" />
      <div className={styles.container}>
        <div className={styles.left}>
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Machine Fan:	"
            isChecked={isMachineFan}
            onClick={() => setIsMachineFan(!isMachineFan)}
            InputValue="yes"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
        </div>
        <div className={styles.center}>
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
          <TableRowComponent
            tableRowLeftHeading="Winding Machine Model No:	"
            value="TW-101"
          />
        </div>
        <div className={styles.right}>
          <h3 className={styles.page_table_heading}>Error Conditions</h3>
          <ol>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
            <li>101-Wire Broken or no Wire in Needle 1.</li>
          </ol>
          <div className={styles.rightButtonSection}>
            <button className={styles.manualButton}>MANUAL</button>
            <button className={styles.emgButton}>EMG</button>
            <button className={styles.runButton}>RUN</button>
            <button className={styles.resetButton}>Reset</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MachineStatus;
