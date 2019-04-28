import React from "react";

// Components
import AlbumReview from "./AlbumReview/AlbumReview";
import AlbumTrackListing from "./AlbumTrackListing/AlbumTrackListing";

const AlbumOverview = ({ review, songs }) => (
  <div>
    <AlbumReview review={review} />
    <AlbumTrackListing songs={songs} />
  </div>
);

export default AlbumOverview;
