import React from "react";
import styles from "./Header.module.css";
import Logo from "../../../assets/images/logo.png";
import moment from "moment";

const Header = ({ title }) => {
  const dateTIme = moment().format("YYYY/MM/DD - hh:mm:ss");

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.logo} src={Logo} alt="Logo" />
      </div>
      <div>
        <h1 className={styles.page_title_heading}>{title}</h1>
      </div>
      <div>
        <h2 className={styles.page_datetime}>{dateTIme}</h2>
      </div>
    </div>
  );
};

export default Header;
