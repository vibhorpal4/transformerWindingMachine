import React from "react";
import styles from "./SplashScreen.module.css";
import SplashImage from "../../assets/images/Splash.png";

const SplashScreen = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={SplashImage} alt="Spalsh Screen" />
    </div>
  );
};

export default SplashScreen;
