import React from "react";
import NavBarItem from "./NavBarItem";
import styles from "./NavBar.module.css";

const NavBar = () => {
  //Dữ liệu cho sẵn
  const dummyData = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  //Xài style component để style cho các phần tử
  return (
    <div>
      <header>
        <section className={styles["flex-header"]}>
          <p>Booking Website</p>
          <div>
            <button className={styles["btn-register"]}>Register</button>
            <button className={styles["btn-log-in"]}>Log in</button>
          </div>
        </section>
        <section className={styles["flex-nav"]}>
          {dummyData.map((e) => (
            //Truyền dữ liệu cho sẵn qua props cho child component (e = element)
            <NavBarItem
              type={e.type}
              icon={e.icon}
              active={e.active}
              // Tạo key random
              key={Math.random() * 100}
            />
          ))}
        </section>
      </header>
    </div>
  );
};
export default NavBar;
