import React from "react";
import { withRouter, Link } from "react-router-dom";

// styles
import s from "./artistMenu.module.css";

const ArtistMenu = ({ match: { url } }) => (
  <ul>
    <li>
      <Link to={`${url}/biography`}>Biography</Link>
    </li>
    <li>
      <Link to={`${url}/discgraphy`}>Discography</Link>
    </li>
    <li>
      <Link to={`${url}/songs`}>Songs</Link>
    </li>
    <li>
      <Link to={`${url}/credits`}>Credits</Link>
    </li>
    <li>
      <Link to={`${url}/related`}>Related</Link>
    </li>
  </ul>
);

export default withRouter(ArtistMenu);
