import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Rich Dad - poor Dad', id: 1 },
    { title: 'Shiva Trilogy', id: 2 },
    { title: 'The Hobbit', id: 3 },
    { title: 'Half Baked Love Story', id: 4 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
