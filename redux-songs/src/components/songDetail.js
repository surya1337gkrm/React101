import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
  // console.log(props);
  return song !== null ? (
    <div>
      <h4>Song-Details</h4>
      <div>Title: {song.title}</div>
      <br />
      <div>Singers: {song.singerName}</div>
      <br />
      <div>Duration: {song.duration}</div>
    </div>
  ) : (
    <div>
      <h4>Select a song</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);
