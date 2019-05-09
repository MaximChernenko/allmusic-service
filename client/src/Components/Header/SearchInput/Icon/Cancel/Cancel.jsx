import React from "react";

// utils
import Icon from "../../../../../utils/helpers/Icon/Icon";

// styles
import s from "./cancel.module.css";

const CancelIcon = ({ onReset }) => (
  <button type="reset" className={s.btn} onClick={onReset}>
    <Icon className={s.icon} size="14px" name="remove" color="#47a4e2" />
  </button>
);

export default CancelIcon;
