import React from "react";

// Components
import UserRating from "../../../../Artist/ArtistDisco/Rating/UserRating/UserRating";

// styles
import s from "./reviewItem.module.css";

const ReviewItem = () => (
  <div className={s.wrapper}>
    <div className={s.box}>
      <p className={s.name}>User name</p>
      <p className={s.date}>Date</p>
      <UserRating rating="4" />
    </div>
    <p className={s.review}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste praesentium
      ea debitis vel, voluptatibus maiores minus rem voluptates dicta, illo
      explicabo! Cumque eum nulla autem, delectus totam explicabo qui aut, iste,
      magni quo repellendus suscipit optio? Repellendus, dolores natus magnam
      odit fuga veritatis necessitatibus et nobis illum laudantium, quas
      possimus consequatur laborum ad fugit vel explicabo nisi sit quasi? Iure
      illum accusamus a veritatis similique. Ratione numquam possimus amet
      quasi, iure placeat praesentium doloribus architecto neque illum deleniti
      repudiandae dolores maxime totam! Facere est et doloribus quia debitis
      aliquam, adipisci nesciunt repudiandae tenetur assumenda officiis ab
      maiores, molestiae quidem nostrum.
    </p>
  </div>
);

export default ReviewItem;
