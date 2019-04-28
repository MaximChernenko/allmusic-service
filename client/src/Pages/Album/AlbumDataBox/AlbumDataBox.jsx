import React from "react";

// styles

import s from "./albumDataBox.module.css";

const AlbumDataBox = ({ releaseDate, duration, genre, styles }) => (
  <div className={s.wrapper}>
    <table className={s.table}>
      <tbody>
        <tr className={s.tr}>
          <td className={s.key}>Release Date</td>
          <td>{releaseDate}</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.key}>Duration</td>
          <td className={s.value}>{duration}</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.key}>Genre</td>
          <td className={s.value}>{genre}</td>
        </tr>
        <tr className={s.listTr}>
          <td className={s.key}>Styles</td>
          <td className={s.value}>
            {
              <ul className={s.list}>
                {styles.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            }
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AlbumDataBox;
