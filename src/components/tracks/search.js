import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-4 p-4">
              <h4 className="display-4 text-center">
                <i className="fas fa-music fa-sm text-muted">
                  {" "}
                  Search for a Song
                </i>
              </h4>
              <p className="lead text-center" style={{ fontFamily: "Cambria" }}>
                Get the lyrics for any song
              </p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <div
                  className="button btn btn-primary btn-lg btn-block mb-5"
                  type="Submit"
                >
                  Get Track Lyrics
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
