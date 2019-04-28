import React from "react";
import { Link } from "react-router-dom";
// Components
import EditorChosieItem from "./EditorChoiseItem/EditorChoiseItem";
// styles
import s from "./editorChoiseList.module.css";

const EditorChosieList = ({ data }) => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h2 className={s.title}>Editor's choise</h2>
      <Link className={s.linkRecom} to="/recommendations">
        All editor's choise
      </Link>
    </div>
    <ul className={s.list}>
      {data.map(item => (
        <li key={item.id}>
          <Link className={s.link} to={`/album/${item.id}`}>
            <EditorChosieItem item={item} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default EditorChosieList;
