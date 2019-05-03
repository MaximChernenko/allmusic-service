import React, { Component } from "react";
import { connect } from "react-redux";
// redux
import operations from "../../../store/session/operations";

// styles
import s from "./signIn.module.css";

const INITIAL_STATE = { email: "", password: "" };

class SignIn extends Component {
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
    const { closeSignInForm, signIn } = this.props;
    signIn(this.state);
    this.setState({ ...INITIAL_STATE });
    closeSignInForm();
  };

  render() {
    const { closeSignInForm } = this.props;
    const { email, password } = this.state;
    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.handlerSubmitForm}>
          <div className={s.topBox}>
            <h2 className={s.title}>
              Log in to your{" "}
              <span className={s.titleChunk}>Allmusic Account</span>
            </h2>
            <button
              className={s.btnClose}
              onClick={closeSignInForm}
              type="button"
            >
              Close
            </button>
          </div>
          <div>
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
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signIn: operations.signIn
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
