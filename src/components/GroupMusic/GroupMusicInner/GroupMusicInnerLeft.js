import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../GroupMusic.module.css";


export const GroupMusicInnerLeft = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
                <img width="650" height="430" src={item.img} alt={item.name} />
                <div>
                  {item.name ? <p className={styles.name}>{item.name}</p> : ""}
                  {item.yaer ? <p className={styles.yaer}>{item.yaer}</p> : ""}
                  {item.director ? (
                    <p className={styles.director}>{item.director}</p>
                  ) : (
                    ""
                  )}
                  {item.info ? <p className={styles.info}>{item.info}</p> : ""}
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
  );
};
