import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

export default function Carousel({ department }) {
  var settings = {
    dots: true,
    arrows: true,
    // arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2200,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
  };
  return (
    <div className={styles.list}>
      <Slider {...settings}>
        {department.map((item) => {
          return (
            <li className={styles.listItem} key={item.id}>
              {item.img ? (
                <img width="370" height="370" src={item.img} alt={item.name} />
              ) : (
                ""
              )}
              {item.info ? <p className={styles.info}>{item.info}</p> : null}
              {item.name ? <p className={styles.name}>{item.name}</p> : null}
            </li>
          );
        })}
      </Slider>
    </div>
  );
}
