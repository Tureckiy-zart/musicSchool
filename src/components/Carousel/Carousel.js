import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";

export default function Carousel({ department, children }) {
  // console.log('department', department)
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "slides",
  };

  {department.map((item) => {
    //           // console.log("item.img", item.img);
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



  return (
    <ul className={styles.list}>
      <Slider {...settings}>{children}</Slider>
    </ul>
  );
}
// export default function Carousel({ department }) {
//   // console.log('department', department)
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     className: "slides",
//   };
//   return (
//     <ul className={styles.list}>
//       <Slider {...settings}>
//         {department.map((item) => {
//           // console.log("item.img", item.img);
//           return (
//             <li className={styles.listItem} key={item.id}>
//               {item.img ? (
//                 <img width="370" height="370" src={item.img} alt={item.name} />
//               ) : (
//                 ""
//               )}
//               {item.info ? <p className={styles.info}>{item.info}</p> : null}
//               {item.name ? <p className={styles.name}>{item.name}</p> : null}
//             </li>
//           );
//         })}
//       </Slider>
//     </ul>
//   );
// }
