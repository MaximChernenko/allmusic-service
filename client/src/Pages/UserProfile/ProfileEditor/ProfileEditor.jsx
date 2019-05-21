import React, { Component } from "react";
import { connect } from "react-redux";

// redux
import userSettSelectors from "../duck/selectors";
import userSettOperations from "../duck/operations";
import sessionSelectors from "../../../store/session/selectors";

// options
import ageSelectOptions from "../../../options/ageSelect";

// styles
import s from "./profileEditor.module.css";

class ProfileEditor extends Component {
  state = {
    name: this.props.userSett ? this.props.userSett.name : "",
    surname: this.props.userSett ? this.props.userSett.surname : "",
    bio: this.props.userSett ? this.props.userSett.bio : "",
    age: this.props.userSett ? this.props.userSett.age : 0
  };

  handlerInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlerSave = e => {
    e.preventDefault();
    const {
      updateUserSett,
      closeEditMode,
      user: { id }
    } = this.props;
    updateUserSett({ ...this.state, userId: id }).then(() => closeEditMode());
  };

  render() {
    const { name, surname, bio, age } = this.state;
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handlerSave}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <input
            className={s.input}
            id="name"
            name="name"
            onChange={this.handlerInputChange}
            type="text"
            value={name}
          />
          <label className={s.label} htmlFor="surname">
            Surname
          </label>
          <input
            className={s.input}
            id="surname"
            name="surname"
            onChange={this.handlerInputChange}
            type="text"
            value={surname}
          />
          <label className={s.label} htmlFor="bio">
            Bio
          </label>
          <input
            className={s.input}
            id="bio"
            name="bio"
            onChange={this.handlerInputChange}
            type="text"
            value={bio}
          />
          <label className={s.label} htmlFor="age">
            Age
          </label>
          <select
            className={s.select}
            id="age"
            name="age"
            onChange={this.handlerInputChange}
            value={age}
          >
            {ageSelectOptions.map(age => (
              <option key={age} className={s.option} value={age}>
                {age}
              </option>
            ))}
          </select>
          <button className={s.btn} type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: sessionSelectors.getUser(state),
  userSett: userSettSelectors.getUserSettByUserId(state)
});

const mapDispatchToProps = {
  updateUserSett: userSettOperations.updateUserSett
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditor);
