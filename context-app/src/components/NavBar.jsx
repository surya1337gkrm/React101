import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Surya Reading List</h1>
      <p>Currently you have {books.length} books to Read...</p>
    </div>
  );
};

export default NavBar;
