import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import styles from "./Header.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = (props) => {
  //State mặc định cho DatePicker - false để ẩn
  const [openDate, setOpenDate] = useState(false);
  //State hiện ngày tháng trong trường Input Date
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //Xài hook useNavigate để điều hướng trang
  const navigate = useNavigate();
  const onSaveSearchHandler = (e) => {
    const data = date[0].startDate;
    e.preventDefault();
    //Lift state up - truyền ngày user nhập lên parent component
    props.onSaveDateHandler(data);
    // Đề gợi ý dùng window.location để điều hướng, nhưng
    // cách này ko truyền được state nên e xài navigate
    // window.location.replace("../search");
    navigate("../search", { state: { date: date[0].startDate } });
  };
  // Ẩn Date Picker khi user click chọn input tiếp theo
  const peopleDataHandler = () => {
    setOpenDate(false);
  };
  return (
    <div>
      <header id={styles["main-header"]}>
        <section className={styles["flex-column"]}>
          <h1>A lifetime of discount? It's Genius.</h1>
          <div>
            Get reward for your travel - unclock instant savings of 10% or more
            with a free account
          </div>
          <div>
            <button className={styles["bth-sign-in__register"]}>
              Sign in / Register
            </button>
          </div>
          <form className={styles["search-form"]}>
            <div>
              <input
                type={"text"}
                placeholder="&#xf072;  Where are you going?"
              />
            </div>
            <div className={styles["date-range__display"]}>
              <i className="fa fa-calendar"></i>
              {/* Thẻ span thay cho placeholder, 
              lấy giá trị user đã nhập trong DatePicker */}
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {/* Nếu openDate true (hiện DatePicker), khi onChange setDate 
              theo data user nhập  */}
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className={styles["date-range"]}
                />
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="&#xf183;  1 adult - 0 children - 1 room"
                onClick={peopleDataHandler}
              />
            </div>
            {/* Khi submit, chạy hàm sau để lưu state qua page Search*/}
            <button
              type="submit"
              className={styles["btn-search"]}
              onClick={onSaveSearchHandler}
            >
              Search
            </button>
          </form>
        </section>
      </header>
    </div>
  );
};
export default Header;
