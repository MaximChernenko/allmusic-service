import React from "react";

// styles
import s from "./artistBio.module.css";

const ArtistBio = ({ bio }) => (
  <div>
    <h2 className={s.title}>Artist Biography</h2>
    <p className={s.text}>{bio}</p>
  </div>
);

export default ArtistBio;
