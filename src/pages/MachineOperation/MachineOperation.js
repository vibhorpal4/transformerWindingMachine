import React from "react";
import Header from "../../components/HOC/Header/Header";
import MachineOperationComponent from "../../components/MachineOperationComponent/MachineOperationComponent";
import WindingInProgressComponent from "../../components/WindingInProgressComponent/WindingInProgressComponent";
import styles from "./MachineOperation.module.css";
import Footer from "../../components/HOC/Footer/Footer";
import WindingInstructionsComponent from "../../components/WindingInstructionsComponent/WindingInstructionsComponent";

const MachineOperation = () => {
  return (
    <>
      <Header title="Machine Operation" />
      <div className={styles.container}>
        <div className={styles.left}>
          <MachineOperationComponent />
          <div className={styles.machineOperationSelectionButton}>
            <div>
              <button>Home</button>
              <button>REF HOME</button>
            </div>
            <div>
              <button>JOG</button>
              <button>RUN</button>
            </div>
            <div>
              <button>LEFT</button>
              <button>MANUAL</button>
            </div>
            <div>
              <button>RIGHT</button>
              <button>AUTO</button>
            </div>
          </div>
          <div className={styles.leftButtonSection}>
            <button className={styles.errorButton}>Error</button>
            <button className={styles.enterButton}>Enter</button>
          </div>
        </div>
        <div className={styles.center}>
          <WindingInProgressComponent />
          <WindingInstructionsComponent />
        </div>
        <div className={styles.right}>
          <div className="currentPositionSection">
            <div className={styles.rightTopColumn}>
              <div className={styles.rightTopBox}>
                <h3>Winding Motor</h3>
              </div>
              <div className={styles.rightTopInput}>
                <h3>3000</h3>
                <p>RPM</p>
              </div>
            </div>
            <div className={styles.rightTopColumn}>
              <div className={styles.rightTopBox}>
                <h3>Indexing Motor</h3>
              </div>
              <div className={styles.rightTopInput}>
                <h3>300.0</h3>
                <p>MM</p>
              </div>
            </div>
            <div className={styles.rightTopColumn}>
              <div className={styles.rightTopBox}>
                <h3>Coil Layer</h3>
              </div>
              <div className={styles.rightTopInput}>
                <h3>N1-1 </h3>
                <p></p>
              </div>
            </div>
            <div className={styles.rightTopColumn}>
              <div className={styles.rightTopBox}>
                <h3>Winding Turns</h3>
              </div>
              <div className={styles.rightTopInput}>
                <h3>15000 </h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className={styles.rightBottom}>
            {/* <div className="rightBottomLeft">
            <div className="upArrowWrapper">
              <img className="arrowImg" src="./assets/imgs/up-arrow.png" />
            </div>
            <div className="downArrowWrapper">
              <img className="arrowImg" src="./assets/imgs/down-arrow.png" />
            </div>
          </div>  */}

            <div className={styles.rightBottomRight}>
              <button className={styles.rightBottomRightButton}>
                CYCLE STOP
              </button>
              <button className={styles.rightBottomRightButton}>RESUME</button>
              <button className={styles.rightBottomRightButton}>
                ROTATION
              </button>
              <button className={styles.rightBottomRightButton}>FORWARD</button>
              <button className={styles.rightBottomRightButton}>REVERSE</button>
            </div>
          </div>
        </div>
      </div>
      <Footer condition="" error="" />
    </>
  );
};

export default MachineOperation;
