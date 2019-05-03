import React, { Component } from "react";
import { connect } from "react-redux";
// redux
import operations from "../../../store/session/operations";
// styles
import s from "./signUp.module.css";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: ""
};

class SignUp extends Component {
  state = {
    ...INITIAL_STATE
  };

  handlerInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    const { closeSignUpForm, signUp } = this.props;
    signUp(this.state);
    this.setState({ ...INITIAL_STATE });
    closeSignUpForm();
  };

  render() {
    const { closeSignUpForm } = this.props;
    const { name, password, email } = this.state;
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handlerSubmitForm}>
          <div className={s.topBox}>
            <h2 className={s.title}>
              Create an
              <span className={s.titleChunk}> Allmusic Account</span>
            </h2>
            <button
              className={s.btnClose}
              onClick={closeSignUpForm}
              type="button"
            >
              Close
            </button>
          </div>
          <div>
            <label className={s.label} htmlFor="name">
              Name
            </label>
            <input
              autoComplete="off"
              className={s.input}
              id="name"
              name="name"
              value={name}
              onChange={this.handlerInputChange}
              placeholder="Name"
              type="text"
            />
            <label className={s.label} htmlFor="email">
              Email Address
            </label>
            <input
              autoComplete="off"
              className={s.input}
              id="email"
              name="email"
              value={email}
              onChange={this.handlerInputChange}
              placeholder="Email Address"
              type="email"
            />
            <label className={s.label} htmlFor="password">
              Password
            </label>
            <input
              autoComplete="off"
              className={s.input}
              id="password"
              name="password"
              value={password}
              onChange={this.handlerInputChange}
              placeholder="Password"
              type="password"
            />
          </div>
          <button className={s.btn} type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signUp: operations.signUp
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
