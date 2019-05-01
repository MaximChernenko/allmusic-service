import React, { Component, createRef } from "react";
import { connect } from "react-redux";

// redux
import searchSelectors from "./duck/selectors";
import { searchData, searchClear } from "./duck/actions";

import cancelIcon from "../../../icons/searchInput/close.svg";
import searchIcon from "../../../icons/searchInput/search.svg";

// Components
import SearchBtn from "./Icon/Search/SearchBtn";
import CancelBtn from "./Icon/Cancel/Cancel";
import SearchModal from "./SearchModal/SearchModal";

// styles
import s from "./searchInput.module.css";

class SearchInput extends Component {
  container = createRef();
  searchBtn = createRef();

  state = {
    isOpen: false
  };

  componentDidMount() {
    window.addEventListener("click", this.checkClick.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.checkClick.bind(this));
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false
    });
  };

  checkClick({ target }) {
    // Close if search btn entered
    console.log(this.searchBtn.current.contains(target));
    if (this.searchBtn.current.contains(target)) {
      this.closeModal();
      return;
    }
    if (this.container.current.contains(target)) {
      this.openModal();
    } else {
      this.closeModal();
    }
  }

  handlerInputChange = ({ target: { value } }) => {
    const { searchData } = this.props;
    searchData(value);
  };

  handlerResetInput = () => {
    const { searchClear } = this.props;
    searchClear();
  };

  render() {
    const { isOpen } = this.state;
    const { search } = this.props;
    return (
      <div ref={this.container} className={s.container}>
        <input
          autoComplete="off"
          className={`${s.input} ${isOpen && s.activeInput}`}
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
        <SearchBtn
          ref={this.searchBtn}
          closeModal={this.closeModal}
          src={searchIcon}
          alt="search"
        />
        {search.length > 0 && isOpen && (
          <SearchModal
            onReset={this.handlerResetInput}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: searchSelectors.getSearch(state)
});

const mapDispatchToProps = {
  searchData,
  searchClear
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
