import React from "react";

// styles
import s from "./albumAvatar.module.css";

const Avatar = ({ id, alt, isPick }) => (
  <div className={s.wrapper}>
    <img
      className={s.img}
      src={process.env.PUBLIC_URL + `/images/albums/${id}.jpg`}
      alt={alt}
    />
    {isPick && <span className={s.text}>Album pick</span>}
  </div>
);

export default Avatar;
