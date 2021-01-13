import React from "react";
import styles from "./GroupMusic.module.css";
import { GroupMusicInnerRight } from "./GroupMusicInner/GroupMusicInnerRight";
import { GroupMusicInnerLeft } from "./GroupMusicInner/GroupMusicInnerLeft";

const GroupMusic = ({ data, title }) => {
  return (
    <section id="groupMusic" className={styles.sendDocs}>
      <h2 className={styles.title}>{title}</h2>
      <GroupMusicInnerLeft data={data[1]} />
      <GroupMusicInnerRight data={data[2]} />
      <GroupMusicInnerLeft data={data[3]} />
    </section>
  );
};

export default GroupMusic;
