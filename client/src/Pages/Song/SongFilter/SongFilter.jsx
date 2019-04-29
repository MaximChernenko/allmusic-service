import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import qs from "query-string";
// styles
import s from "./songFilter.module.css";

const enAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

class SongFilter extends Component {
  getLetterFromProps = props => qs.parse(props.location.search).letter;

  componentDidMount() {
    const letter = this.getLetterFromProps(this.props);

    if (letter) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `letter=${letter}`
      });
    } else {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: "letter=all"
      });
    }
  }
  onLetterChange = ({ target: { value } }) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `letter=${value}`
    });
  };

  render() {
    const { songs } = this.props;
    const currentLetter = this.getLetterFromProps(this.props);
    let songsToShow = [];
    if (currentLetter === "all") {
      songsToShow = songs;
    } else {
      songsToShow = songs.filter(song =>
        song.name.toLowerCase().startsWith(currentLetter)
      );
    }

    return (
      <div>
        <h2 className={s.title}>
          All songs {`(${songsToShow.length}-${songs.length})`}
        </h2>
        <ul className={s.filterList}>
          <li>
            <button
              className={`${s.filterBtn} ${songsToShow.length ===
                songs.length && s.activeBtn}`}
              value="all"
              type="button"
              onClick={this.onLetterChange}
            >
              All
            </button>
          </li>
          {enAlphabet.map(letter => (
            <li key={letter}>
              <button
                className={`${s.filterBtn} ${letter === currentLetter &&
                  s.activeBtn}`}
                type="button"
                value={letter}
                onClick={this.onLetterChange}
              >
                {letter}
              </button>
            </li>
          ))}
        </ul>
        <ul className={s.songList}>
          {songsToShow.length > 0 ? (
            songsToShow.map(song => (
              <li className={s.songItem} key={song.id}>
                <p className={s.songName}>{song.name}</p>
              </li>
            ))
          ) : (
            <h2>No such songs</h2>
          )}
        </ul>
      </div>
    );
  }
}

export default withRouter(SongFilter);
