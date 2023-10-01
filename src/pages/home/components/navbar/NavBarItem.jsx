import React from "react";
import styles from "./NavBar.module.css";

const NavBarItem = (props) => {
  //Toán tử điều kiện, nếu active true add class active ..
  //cho div dưới (thêm border)
  return (
    <div
      className={`${styles["nav-wrapper"]} ${props.active && styles.active}`}
    >
      <i className={`fa ${props.icon}`}></i> {props.type}
    </div>
  );
};
export default NavBarItem;
