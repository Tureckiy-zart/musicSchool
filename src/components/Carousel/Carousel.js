import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Carousel.module.css";

export default function Carousel(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
  };
  return (
    <ul className={styles.list}>
      <Slider {...settings}>
        {props.data.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <img width="370" height="370" src={item.img} alt={item.name} />
            {item.info ? <p className={styles.info}>{item.info}</p> : ""}
            {item.name ? <p className={styles.name}>{item.name}</p> : ""}
            {/* {item.name ? <p className={styles.name}>{item.name}</p> : ""} */}
          </li>
        ))}
      </Slider>
    </ul>
  );
}
