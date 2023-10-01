import React from "react";
import styles from "./CityList.module.css";
import CityListItems from "./CityListItems";

const CityList = () => {
  const dummyData = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  //Map qua dummyData để truyền data cho child component (như phần header)
  return (
    <div>
      <section className={styles["main-section"]} id={styles["cities-grid-3"]}>
        {dummyData.map((e) => (
          <CityListItems
            name={e.name}
            subText={e.subText}
            imageUrl={e.image}
            key={Math.random() * 100}
          />
        ))}
      </section>
    </div>
  );
};
export default CityList;
