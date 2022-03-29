import React, { useState } from "react";
import Footer from "../../components/HOC/Footer/Footer";
import Header from "../../components/HOC/Header/Header";
import TableRowComponent from "../../components/TableRowComponent/TableRowComponent";
import styles from "./MachineConfiguration.module.css";

const MachineConfiguration = () => {
  const [remoteMonitoringToggle, setRemoteMoniteringToggle] = useState(false);
  const [alarmAudible, setAlarmAudible] = useState(false);
  const [manualRPM, setManualRPM] = useState(false);

  return (
    <>
      <Header title="Machine Configuration" />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.tableHeadingWrapper}>
            <h3 className={styles.page_table_heading}>Machine Information</h3>
          </div>
          <div>
            <TableRowComponent
              tableRowLeftHeading="Winding Machine Model No:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Machine Serial No:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Machine Install Date:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Machine Supervisor Name:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Machine Operator Name:"
              value="TW-101"
            />
          </div>

          <div className={styles.tableHeadingWrapper}>
            <h3 className={styles.page_table_heading}>Option Conditions</h3>
          </div>
          <div>
            <TableRowComponent
              tableRowLeftHeading="Remote Monitoring:"
              InputValue="on"
              isChecked={remoteMonitoringToggle}
              onClick={() => setRemoteMoniteringToggle(!remoteMonitoringToggle)}
            />
            <TableRowComponent
              tableRowLeftHeading="Alarm Audible:"
              InputValue="on"
              isChecked={alarmAudible}
              onClick={() => setAlarmAudible(!alarmAudible)}
            />
            <TableRowComponent
              tableRowLeftHeading="Manual RPM Dial:"
              InputValue="on"
              isChecked={manualRPM}
              onClick={() => setManualRPM(!manualRPM)}
            />
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.tableHeadingWrapper}>
            <h3 className={styles.page_table_heading}>Connection Settings</h3>
          </div>
          <div>
            <TableRowComponent tableRowLeftHeading="COM Port:" value="TW-101" />
            <TableRowComponent
              tableRowLeftHeading="Baud Rate:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Data Bits:"
              value="TW-101"
            />
            <TableRowComponent tableRowLeftHeading="Parity:" value="TW-101" />
            <TableRowComponent
              tableRowLeftHeading="Stop Bits:"
              value="TW-101"
            />
            <TableRowComponent
              tableRowLeftHeading="Flow Control:"
              value="TW-101"
            />
          </div>
          <div>
            <button className={styles.loadMachineButton}>
              Load Machine Configuration
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <div className={styles.tableHeadingWrapper}>
              <h3 className={styles.page_table_heading}>Factory Default</h3>
            </div>
            <div>
              <TableRowComponent
                tableRowLeftHeading="Factory Default Motor RPM:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="System Units: mm/Inches:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="Temperature Setting F or C:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="Set Machine Temperature:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="Set Machine Rotation Jog Angle:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="1st Shift Starting Time:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="1st Shift Ending Time:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="2nd Shift Starting Time:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="2nd Shift Ending Time:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="3rd Shift Starting Time:"
                value="TW-101"
              />
              <TableRowComponent
                tableRowLeftHeading="3rd Shift Ending Time:"
                value="TW-101"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MachineConfiguration;
