import React from "react";

// styles
import s from "./artistBio.module.css";

const ArtistBio = ({ bio }) => (
  <div>
    <h2>Artist Biography</h2>
    <p>{bio}</p>
  </div>
);

export default ArtistBio;
