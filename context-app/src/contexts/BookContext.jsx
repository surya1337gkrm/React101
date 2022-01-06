import React, { createContext, useState, useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //useReducer takes 3 paramters out of which 3rd param is optional
  //if 3rd isnt provided, 2nd param will be consdered as initial state
  // if 3rd param provided, which will be a function : that returns the state to the reducer

  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };

  // const removeBook = (id) => {
  //   console.log('removed', id);
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
