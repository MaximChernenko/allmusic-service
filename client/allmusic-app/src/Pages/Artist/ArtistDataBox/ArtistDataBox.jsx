import React from "react";

// styles
import s from "./artistDataBox.module.css";

const ArtistDataBox = ({ active, formed, genre, styles, groupMembers }) => (
  <div>
    <table>
      <tr>
        <td>Active</td>
        <td>{active}</td>
      </tr>
      <tr>
        <td>Formed</td>
        <td>{formed}</td>
      </tr>
      <tr>
        <td>Genre</td>
        <td>{genre}</td>
      </tr>
      <tr>
        <td>Styles</td>
        <td>
          {
            <ul>
              {styles.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          }
        </td>
      </tr>
      <tr>
        <td>Group members</td>
        <td>
          {
            <ul>
              {groupMembers.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          }
        </td>
      </tr>
    </table>
  </div>
);

export default ArtistDataBox;
