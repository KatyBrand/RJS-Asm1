import React from "react";
import styles from "./CityList.module.css";

//Hiển thị data thông qua props
const CityListItems = (props) => {
  return (
    <div className={styles["city-container"]}>
      <img className={styles.img} src={props.imageUrl} alt="city-img" />
      <div className={styles["city-description"]}>
        <h1 className={styles["city-title"]}>{props.name}</h1>
        <div className={styles["city-subtext"]}>{props.subText}</div>
      </div>
    </div>
  );
};
export default CityListItems;
