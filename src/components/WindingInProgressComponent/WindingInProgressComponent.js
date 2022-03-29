import React from "react";
import styles from "./WindingInProgressComponent.module.css";

const WindingInProgressComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topBox}>
          <h4>BOBBIN PART NO:</h4>
        </div>
        <div className={styles.topBoxRight}>
          <h4>PQ3530</h4>
        </div>
      </div>
      <div className={styles.main}>
        <h3>WINDING IN PROGRESS</h3>
      </div>
      <div className={styles.bottom}>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Wire Size</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>27</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>Gauge</span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Wire OD</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>0.350</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>mm</span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Turns</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>62</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}></span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Rotation</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>0or1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>0 =CW or 1 CCW</span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Tape</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>3</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>Full Turn</span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Starting Pin</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>Pin Location</span>
            </div>
          </div>
        </div>
        <div className={styles.windingInProcessSectionBottomColumn}>
          <div className={styles.windingInProcessSectionBottomLeftColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>N1-1</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRight}>
              <span className={styles.columnData}>Winding Ending Pin</span>
            </div>
          </div>
          <div className={styles.windingInProcessSectionBottomRightColumn}>
            <div className={styles.windingInProcessSectionBottomLeft}>
              <span className={styles.columnData}>5</span>
            </div>
            <div className={styles.windingInProcessSectionBottomRightYellow}>
              <span className={styles.columnData}>Pin Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindingInProgressComponent;
