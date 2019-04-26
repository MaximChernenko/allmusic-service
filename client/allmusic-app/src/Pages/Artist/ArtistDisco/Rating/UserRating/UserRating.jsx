import React from "react";

// styles
import s from "./userRating.module.css";

const UserRating = ({ rating }) => (
  <ul className={s.list}>
    <li>
      <button className={`${s.defaultBtn} ${rating >= 1 && s.activeBtn}`} />
    </li>
    <li>
      <button className={`${s.defaultBtn} ${rating >= 2 && s.activeBtn}`} />
    </li>
    <li>
      <button className={`${s.defaultBtn} ${rating >= 3 && s.activeBtn}`} />
    </li>
    <li>
      <button className={`${s.defaultBtn} ${rating >= 4 && s.activeBtn}`} />
    </li>
    <li>
      <button className={`${s.defaultBtn} ${rating >= 5 && s.activeBtn}`} />
    </li>
  </ul>
);

export default UserRating;
