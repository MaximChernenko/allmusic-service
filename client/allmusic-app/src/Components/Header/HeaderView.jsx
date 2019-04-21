import React from "react";

// Components
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import Menu from "./Menu/Menu";
import AuthBox from "./AuthBox/AuthBox";

// styles
import s from "./header.module.css";

const Header = () => (
  <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.box}>
        <Logo />
        <SearchInput />
      </div>
      <div className={s.footBox}>
        <Menu />
        <div>
          <AuthBox />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
