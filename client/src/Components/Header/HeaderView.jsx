import React, { useRef, useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import selectors from "../../store/session/selectors";

// Components
import Logo from "./Logo/Logo";
import SearchInput from "./SearchInput/SearchInput";
import Menu from "./Menu/Menu";
import AuthBox from "./AuthBox/AuthBox";

// styles
import s from "./header.module.css";
import UserBox from "./UserBox/UserBox";

const Header = memo(({ openSignInForm, openSignUpForm }) => {
  let fixPoint = 0;

  const footBox = useRef(null);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const user = useSelector(selectors.getUser);
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  const handleScroll = e => {
    if (window.pageYOffset >= fixPoint) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fixPoint = footBox.current.getBoundingClientRect().top + window.pageYOffset;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={`${s.box} ${isNavFixed ? s.paddingFix : null}`}>
          <Logo />
          <SearchInput />
        </div>
        {!isNavFixed ? (
          <div ref={footBox} className={s.footBox}>
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
            <div ref={footBox} className={s.fixedFootBox}>
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
});

export default Header;
