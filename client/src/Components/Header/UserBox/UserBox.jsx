import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// redux
import operations from "../../../store/session/operations";
// styles
import s from "./userBox.module.css";

const UserBox = ({ user: { name }, signOut }) => (
  <ul className={s.list}>
    <li className={s.item}>
      <Link to="/my-profile" className={s.link}>
        {name}
      </Link>
    </li>
    <li className={s.item}>
      <Link to="/log-out" onClick={signOut} className={s.link}>
        Log out
      </Link>
    </li>
  </ul>
);

const mapDispatchToProps = {
  signOut: operations.signOut
};

export default connect(
  null,
  mapDispatchToProps
)(UserBox);
