import React, { useState } from 'react';

const NewSongForm = ({addSong}) => {
  const [songName, setSongName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(songName);
    setSongName('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name</label>
      <br />
      <input
        type='text'
        required
        onChange={(e) => setSongName(e.target.value)}
        value={songName}
      />
      <input type='submit' value='add song' />
    </form>
  );
};

export default NewSongForm;
