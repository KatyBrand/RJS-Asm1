import React from "react";
import styles from "./HotelSystemList.module.css";

//Tương tự phần trước
const HotelSystemItem = (props) => {
  return (
    <>
      <div className={styles["hotel-sys-container"]}>
        <img
          src={props.imageUrl}
          alt="hotel-system-img"
          className={styles.img}
        />
        <div>
          <p className={styles["hotel-system-description__name"]}>
            {props.name}
          </p>
          <p className={styles["hotel-system-description__count"]}>
            {props.count} hotels
          </p>
        </div>
      </div>
    </>
  );
};
export default HotelSystemItem;
