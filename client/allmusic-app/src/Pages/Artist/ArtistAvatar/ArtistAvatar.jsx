import React from "react";

// styles
import s from "./artistAvatar.module.css";

const Avatar = ({ imgSrc, alt }) => (
  <img className={s.img} src={imgSrc} alt={alt} />
);

export default Avatar;
