import React, { Component, createRef } from "react";

// Components
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import Menu from "./Menu/Menu";
import AuthBox from "./AuthBox/AuthBox";

// styles
import s from "./header.module.css";

export default class Header extends Component {
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
    return isNavFixed !== nextState.isNavFixed;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    console.log(this.fixPoint);
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
                <AuthBox />
              </div>
            </div>
          ) : (
            <div className={s.fixedFootWrapper}>
              <div ref={this.footBox} className={s.fixedFootBox}>
                <Menu />
                <div>
                  <AuthBox />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
}
