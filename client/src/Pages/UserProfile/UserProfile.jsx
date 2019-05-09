import React, { Component } from "react";

// components
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileEditor from "./ProfileEditor/ProfileEditor";

// utils
import Icon from "../../utils/helpers/Icon/Icon";

// styles
import s from "./userProfile.module.css";

export default class UserProfile extends Component {
  state = {
    editMode: false
  };

  editModeOn = () => {
    this.setState({ editMode: true });
  };

  editModeOff = () => {
    this.setState({ editMode: false });
  };

  render() {
    const { editMode } = this.state;
    return (
      <div className={s.wrapper}>
        {editMode ? (
          <ProfileEditor closeEditMode={this.editModeOff} />
        ) : (
          <>
            <h2 className={s.title}>User Profile</h2>
            <ProfileInfo />
            <button className={s.btn} onClick={this.editModeOn}>
              <Icon className={s.icon} name="pencil" size="40px" />
            </button>
          </>
        )}
      </div>
    );
  }
}
