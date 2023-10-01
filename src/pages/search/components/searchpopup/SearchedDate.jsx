import React from "react";
import styles from "./SearchPopup.module.css";

const SearchedDate = (props) => {
  //Biến chứa ngày user đã pick
  let startingDate;
  //Nếu user đã chọn ngày ở Homepage thì..
  if (props.openDate) {
    const date = props.openDate;
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    //Chuyển đổi Date Object thành String với format yyyy-MM-dd
    startingDate = date.getFullYear() + "-" + month + "-" + day;
  }
  return (
    <div>
      <input
        className={styles["search-input__field"]}
        type="date"
        //Đặt giá trị mặc định cho input ..
        //Là giá trị user đã chọn trong Homepage)
        defaultValue={startingDate}
      ></input>
    </div>
  );
};
export default SearchedDate;
