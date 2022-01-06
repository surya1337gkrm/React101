import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewSongForm from './NewSongForm';

const Songlist = () => {
  const [songs, setSongs] = useState([
    {
      title: 'Chellamma',
      id: 1,
    },
    {
      title: 'Naan Pizhai',
      id: 2,
    },
    {
      title: 'Two Two Two',
      id: 3,
    },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title , id: uuid() }]);
  };
  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      
      <NewSongForm addSong={addSong}/>
    </div>
  );
};

export default Songlist;
