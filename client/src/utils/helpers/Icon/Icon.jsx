import React from "react";
import icons from "../../../icons/icons.svg";

// styles
import s from "./icon.module.css";

const Icon = ({ name, color, size, className }) => (
  <svg className={className} fill={color} width={size} height={size}>
    <use xlinkHref={`${icons}#${name}`} />
  </svg>
);

export default Icon;
