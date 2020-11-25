import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./GroupMusic.module.css";
import { GroupMusicInnerRight } from "./GroupMusicInner/GroupMusicInnerRight";
import { GroupMusicInnerLeft } from "./GroupMusicInner/GroupMusicInnerLeft";

export const GroupMusic = (props) => (
  <section className={styles.sendDocs}>
    <h2 className={styles.title}>{props.title}</h2>
    <GroupMusicInnerLeft
      data={props.departments["КОЛЕКТИВНЕ МУЗИКУВАННЯ"].innerLeftGroup1}
      title={"КОЛЕКТИВНЕ МУЗИКУВАННЯ"}
    />
    <GroupMusicInnerRight
      data={props.departments["КОЛЕКТИВНЕ МУЗИКУВАННЯ"].innerRight}
    />
    <GroupMusicInnerLeft
      data={props.departments["КОЛЕКТИВНЕ МУЗИКУВАННЯ"].innerLeftGroup2}
      title={"КОЛЕКТИВНЕ МУЗИКУВАННЯ"}
    />
  </section>
);
