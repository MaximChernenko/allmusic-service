import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import selectors from "../../store/session/selectors";
// Components
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import Menu from "./Menu/Menu";
import AuthBox from "./AuthBox/AuthBox";

// styles
import s from "./header.module.css";
import UserBox from "./UserBox/UserBox";

class Header extends Component {
  footBox = createRef();

  state = {
    isNavFixed: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.fixPoint =
      this.footBox.current.getBoundingClientRect().top + window.pageYOffset;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isNavFixed } = this.state;
    const { isAuthenticated } = this.props;
    return (
      isNavFixed !== nextState.isNavFixed ||
      isAuthenticated !== nextProps.isAuthenticated
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    if (window.pageYOffset >= this.fixPoint) {
      this.setState({
        isNavFixed: true
      });
    } else {
      this.setState({
        isNavFixed: false
      });
    }
  };

  render() {
    const {
      openSignInForm,
      openSignUpForm,
      user,
      isAuthenticated
    } = this.props;
    const { isNavFixed } = this.state;
    return (
      <header className={s.header}>
        <div className={s.wrapper}>
          <div className={`${s.box} ${isNavFixed ? s.paddingFix : null}`}>
            <Logo />
            <SearchInput />
          </div>
          {!isNavFixed ? (
            <div ref={this.footBox} className={s.footBox}>
              <Menu />
              <div>
                {isAuthenticated ? (
                  <UserBox user={user} />
                ) : (
                  <AuthBox
                    openSignUpForm={openSignUpForm}
                    openSignInForm={openSignInForm}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className={s.fixedFootWrapper}>
              <div ref={this.footBox} className={s.fixedFootBox}>
                <Menu />
                <div>
                  {isAuthenticated ? (
                    <UserBox user={user} />
                  ) : (
                    <AuthBox
                      openSignUpForm={openSignUpForm}
                      openSignInForm={openSignInForm}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  user: selectors.getUser(state),
  isAuthenticated: selectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(Header);
