import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux
import searchSelectors from "./duck/selectors";
import { searchData, searchClear } from "./duck/actions";
import { advancedSearchReset } from "../../../Pages/AdvancedSearch/duck/actions";

import searchIcon from "../../../icons/searchInput/search.svg";

// Components
import SearchBtn from "./Icon/Search/SearchBtn";
import CancelBtn from "./Icon/Cancel/Cancel";
import SearchModal from "./SearchModal/SearchModal";

// styles
import s from "./searchInput.module.css";

const SearchInput = () => {
  const container = useRef();
  const searchBtn = useRef();

  const search = useSelector(searchSelectors.getSearch);
  const dispatch = useDispatch();

  const srchData = value => dispatch(searchData(value));
  const srchClear = () => dispatch(searchClear());
  const advancedSrchReset = () => dispatch(advancedSearchReset());

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const checkClick = ({ target }) => {
    // Close if search btn entered
    if (searchBtn.current) {
      if (searchBtn.current.contains(target)) {
        closeModal();
        return;
      }
    }
    if (container.current) {
      if (container.current.contains(target)) {
        openModal();
      } else {
        closeModal();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", checkClick);

    return () => {
      window.removeEventListener("click", checkClick);
    };
  }, []);

  const handlerInputChange = ({ target: { value } }) => {
    advancedSrchReset();
    srchData(value);
  };

  return (
    <div ref={container} className={s.container}>
      <input
        autoComplete="off"
        className={`${s.input} ${isOpen && s.activeInput}`}
        name="search"
        value={search}
        placeholder="Search"
        onChange={handlerInputChange}
      />
      {search.length > 0 && <CancelBtn onReset={srchClear} />}
      <SearchBtn
        ref={searchBtn}
        closeModal={closeModal}
        src={searchIcon}
        alt="search"
      />
      {search.length > 0 && isOpen && (
        <SearchModal onReset={srchClear} closeModal={closeModal} />
      )}
    </div>
  );
};

export default SearchInput;
