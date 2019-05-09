import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

// redux
import userSettSelectors from "../duck/selectors";

// styles
import s from "./profileInfo.module.css";

const ProfileInfo = ({ userSett }) =>
  userSett ? (
    <div className={s.wrapper}>
      <p className={s.text}>
        <u>Name</u> : {userSett.name}
      </p>
      <p className={s.text}>
        <u>Surname</u> : {userSett.surname}
      </p>
      <p className={s.text}>
        <u>Age</u> : {userSett.age}
      </p>
      <p className={s.text}>
        <u>Bio</u> : {userSett.bio}
      </p>
    </div>
  ) : (
    <div className={s.loader}>
      <Loader color="#000000" height="100" width="100" />
    </div>
  );

const mapStateToProps = state => ({
  userSett: userSettSelectors.getUserSettByUserId(state)
});

export default connect(mapStateToProps)(ProfileInfo);
