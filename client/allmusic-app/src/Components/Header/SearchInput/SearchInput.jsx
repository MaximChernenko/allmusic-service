import React, { Component } from "react";

import cancelIcon from "../../../icons/searchInput/close.svg";
import searchIcon from "../../../icons/searchInput/search.svg";

// Components
import SearchBtn from "./Icon/Search/Search";
import CancelBtn from "./Icon/Cancel/Cancel";

// styles
import s from "./searchInput.module.css";

export default class SearchInput extends Component {
  state = {
    search: ""
  };

  handlerInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlerResetInput = () => {
    this.setState({
      search: ""
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className={s.container}>
        <input
          autoComplete="off"
          className={s.input}
          name="search"
          value={search}
          placeholder="Search"
          onChange={this.handlerInputChange}
        />
        {search.length > 0 && (
          <CancelBtn
            onReset={this.handlerResetInput}
            src={cancelIcon}
            alt="cancel"
          />
        )}
        <SearchBtn src={searchIcon} alt="search" />
      </div>
    );
  }
}
