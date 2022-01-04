import {combineReducers} from "redux";

const songsReducer = () => {
  return [
    {title: "Rendu Kaadhal", duration: "05:23",singerName:'Anirudh Ravichander,Shaktisree Gopalan,Aishwarya Suresh Bindra'},
    {title: "Two Two Two", duration: "04:22",singerName:'Anirudh Ravichander,Sunidhi Chauhan, Sanjana Kalmanje'},
    {title: "Naan Pizhai", duration: "03:11",singerName:'Ravi G, Shashaa Tirupati'},
    {title: "Jalabula Jangu", duration: "04:19",singerName:'Anirudh Ravichander'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
