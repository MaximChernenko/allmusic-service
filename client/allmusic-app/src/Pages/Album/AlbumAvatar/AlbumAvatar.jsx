import React from "react";

// styles
import s from "./albumAvatar.module.css";

const Avatar = ({ imgSrc, alt, isPick }) => (
  <div className={s.wrapper}>
    <img className={s.img} src={imgSrc} alt={alt} />
    {isPick && <span className={s.text}>Album pick</span>}
  </div>
);

export default Avatar;
