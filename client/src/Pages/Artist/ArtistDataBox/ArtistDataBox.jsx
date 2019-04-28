import React from "react";

// styles
import s from "./artistDataBox.module.css";

const ArtistDataBox = ({ active, formed, genre, styles, groupMembers }) => (
  <div className={s.wrapper}>
    <table className={s.table}>
      <tbody>
        <tr className={s.tr}>
          <td className={s.key}>Active</td>
          <td>{active}</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.key}>Formed</td>
          <td className={s.value}>{formed}</td>
        </tr>
        <tr className={s.tr}>
          <td className={s.key}>Genre</td>
          <td className={s.value}>{genre}</td>
        </tr>
        <tr className={`${s.listTr} ${s.tr}`}>
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
        <tr className={s.listTr}>
          <td className={s.key}>Group members</td>
          <td className={s.value}>
            {
              <ul className={s.list}>
                {groupMembers.map(item => (
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

export default ArtistDataBox;
