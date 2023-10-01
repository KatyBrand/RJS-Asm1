import React from "react";
import { Link } from "react-router-dom";
import styles from "./HotelList.module.css";

//Tương tự phần trước
const HotelListItem = (props) => {
  return (
    <div>
      <img src={props.imageUrl} alt="hotel-img" className={styles.img} />
      <div>
        <p>
          {/* Link tới page Detail */}
          <Link to="/detail" className={styles["hotel-link"]}>
            {props.name}
          </Link>
        </p>
        <p>{props.city}</p>
        <p className={styles["hotel-price__description"]}>
          Starting from ${props.price}
        </p>
        <p className={styles["rate-type"]}>
          <span className={styles.rate}>{props.rate}</span>
          {props.type}
        </p>
      </div>
    </div>
  );
};
export default HotelListItem;
