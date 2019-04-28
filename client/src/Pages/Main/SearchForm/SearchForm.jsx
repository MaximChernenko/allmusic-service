import React, { Component } from "react";

// styles
import s from "./searchForm.module.css";

// options
import dateList from "../../../options/dateSelect";
import ratingList from "../../../options/ratingSelect";

// default state
const DEFAULTS = {
  genreOrStyle: "",
  date: 2019,
  rating: 1
};

export default class AdvancedAlbumSearch extends Component {
  state = {
    ...DEFAULTS
  };

  handlerInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      ...DEFAULTS
    });
  };

  render() {
    const { genreOrStyle, date, rating } = this.state;
    return (
      <form className={s.form} onSubmit={this.handlerSubmitForm}>
        <div className={s.groupper}>
          <h2 className={s.title}>Advanced Album Search</h2>
        </div>
        <div className={s.innerText}>
          <label className={s.label} htmlFor="genre-input">
            Genres & Styles
          </label>
          <input
            id="genre-input"
            autoComplete="off"
            placeholder="Search for genres & styles"
            className={s.input}
            onChange={this.handlerInputChange}
            name="genreOrStyle"
            value={genreOrStyle}
            type="text"
          />
        </div>
        <div className={s.inner}>
          <label className={s.label} htmlFor="date-select">
            Release Date
          </label>
          <select
            id="date-select"
            className={s.dateSelect}
            onChange={this.handlerInputChange}
            name="date"
            value={date}
          >
            {dateList.map(date => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div className={s.inner}>
          <label className={s.label} htmlFor="rating-select">
            Allmusic Rating
          </label>
          <select
            id="rating-select"
            className={s.ratingSelect}
            onChange={this.handlerInputChange}
            name="rating"
            value={rating}
          >
            {ratingList.map(rating => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
        <button className={s.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}
