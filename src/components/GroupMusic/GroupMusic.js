import React from "react";
import styles from "./GroupMusic.module.css";
import { GroupMusicInnerRight } from "./GroupMusicInner/GroupMusicInnerRight";
import { GroupMusicInnerLeft } from "./GroupMusicInner/GroupMusicInnerLeft";

const GroupMusic = ({ data, title }) => {
  const { innerLeftGroup1, innerLeftGroup2, innerRight } = data;
  return (
    <section className={styles.sendDocs}>
      <h2 className={styles.title}>{title}</h2>
      <GroupMusicInnerLeft data={innerLeftGroup1} />
      <GroupMusicInnerRight data={innerRight} />
      <GroupMusicInnerLeft data={innerLeftGroup2} />
    </section>
  );
};

export default GroupMusic;
