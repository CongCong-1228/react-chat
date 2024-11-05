import React from "react";
import styles from "./userInfo.module.less";
import avatar from "/images/avatar.png";
import more from "/images/more.png";
import video from "/images/video.png";
import edit from "/images/edit.png";

const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.user}>
        <img src={avatar} alt="" />
        <div>Cong Cong</div>
      </div>
      <div className={styles.icons}>
        <img src={more} alt="more" />
        <img src={video} alt="video" />
        <img src={edit} alt="edit" />
      </div>
    </div>
  );
};

export default UserInfo;
