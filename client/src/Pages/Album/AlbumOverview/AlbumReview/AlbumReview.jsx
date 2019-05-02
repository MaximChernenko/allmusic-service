import React, { Component } from "react";

// styles
import s from "./albumReview.module.css";

export default class AlbumReview extends Component {
  state = {
    isCollapsed: true
  };

  handlerToggleBtn = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }));
  };

  render() {
    const { isCollapsed } = this.state;
    const { review } = this.props;
    return (
      <div className={s.wrapper}>
        <div className={`${s.inner} ${isCollapsed && s.innerCollapsed}`}>
          <h2 className={s.title}>Album Review</h2>
          <p className={s.text}>{review}</p>
        </div>
        <button
          onClick={this.handlerToggleBtn}
          className={`${s.btn} ${isCollapsed ? s.btnCollapsed : s.btnFull}`}
        >
          {isCollapsed ? "Read more" : "Collapse"}
        </button>
      </div>
    );
  }
}
