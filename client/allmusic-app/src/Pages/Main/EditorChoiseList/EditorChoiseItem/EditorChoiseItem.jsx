import React from "react";

// styles
import s from "./editorChoiseItem.module.css";

const EditorChoiseItem = ({ item }) => (
  <div className={s.wrapper}>
    <img className={s.img} src={item.src} alt={item.name} />
    <div className={s.inner}>
      <p className={s.band}>{item.band}</p>
      <p className={s.album}>{item.name}</p>
    </div>
  </div>
);

export default EditorChoiseItem;
