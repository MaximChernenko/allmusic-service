import React from "react";

// styles
import s from "./cancel.module.css";

const CancelIcon = ({ src, alt, onReset }) => (
  <button type="reset" className={s.btn} onClick={onReset}>
    <img src={src} alt={alt} />
  </button>
);

export default CancelIcon;
