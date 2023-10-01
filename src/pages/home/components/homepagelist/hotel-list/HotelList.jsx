import React from "react";
import styles from "./HotelList.module.css";
import HotelListItem from "./HotelListItem";

//Tương tự phần trước
const HotelList = () => {
  const dummyData = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div>
      <div className={styles["list-title"]}>Home guests love</div>
      <section className={styles["main-section"]} id={styles["hotel-grid-4"]}>
        {dummyData.map((e) => (
          <HotelListItem
            name={e.name}
            city={e.city}
            price={e.price}
            rate={e.rate}
            type={e.type}
            imageUrl={e.image_url}
            key={Math.random() * 100}
          />
        ))}
      </section>
    </div>
  );
};
export default HotelList;
