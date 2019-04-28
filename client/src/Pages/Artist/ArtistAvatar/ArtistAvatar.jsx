import React from "react";

// styles
import s from "./artistAvatar.module.css";

const Avatar = ({ id, alt }) => (
  <img
    className={s.img}
    src={process.env.PUBLIC_URL + `/images/artists/${id}.jpg`}
    alt={alt}
  />
);

export default Avatar;
