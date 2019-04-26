import React, { Component } from "react";

// styles
import s from "./userRatingSelect.module.css";

export default class UserRatingSelect extends Component {
  state = { stars: 0 };

  handleStarClick = ({ target: { value } }) => {
    this.setState({
      stars: value
    });
  };

  render() {
    const { stars } = this.state;
    return (
      <ul className={s.list}>
        <li>
          <button
            value="1"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${stars >= 1 && s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="2"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${stars >= 2 && s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="3"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${stars >= 3 && s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="4"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${stars >= 4 && s.activeBtn}`}
          />
        </li>
        <li>
          <button
            value="5"
            onClick={this.handleStarClick}
            className={`${s.defaultBtn} ${stars >= 5 && s.activeBtn}`}
          />
        </li>
      </ul>
    );
  }
}
