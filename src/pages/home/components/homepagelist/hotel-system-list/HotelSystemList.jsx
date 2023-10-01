import React from "react";
import HotelSystemItem from "./HotelSystemItem";
import styles from "./HotelSystemList.module.css";

//Tương tự phần trước
const HotelSystemList = () => {
  const dummyData = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];

  return (
    <div>
      <div className={styles["list-title"]}>Browse by property type</div>
      <section
        className={styles["main-section"]}
        id={styles["hotel-system-grid-5"]}
      >
        {dummyData.map((e) => (
          <HotelSystemItem
            name={e.name}
            count={e.count}
            imageUrl={e.image}
            key={Math.random() * 100}
          />
        ))}
      </section>
    </div>
  );
};
export default HotelSystemList;
