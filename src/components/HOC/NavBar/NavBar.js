import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/"
          >
            Machine User Selection
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-operation"
          >
            Machine Operation
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-configuration"
          >
            Machine Configuration
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-status"
          >
            Machine Status
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-operator-instructions"
          >
            Operator Instructions
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-winding-parameters-1"
          >
            Winding Parameters1
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            to="/machine-winding-parameters-2"
          >
            Winding Parameters2
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
