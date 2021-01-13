import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../GroupMusic.module.css";


export const GroupMusicInnerRight = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };
  return (
    <ul className={styles.list}>
      <Slider {...settings}>
        {props.data.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <div className={styles.container}>
              <div>
                {item.name ? <p className={styles.name}>{item.name}</p> : ""}
                {item.year ? <p className={styles.year}>{item.year}</p> : ""}
                {item.director ? (
                  <p className={styles.director}>{item.director}</p>
                ) : (
                  ""
                )}
                {item.info ? <p className={styles.info}>{item.info}</p> : ""}
              </div>
              <img width="650" height="430" src={item.img} alt={item.name} />
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};
