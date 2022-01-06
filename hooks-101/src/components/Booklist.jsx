import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class Booklist extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className='book-list'
//         style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{background:theme.ui}}>Rich Dad - Poor Dad</li>
//           <li style={{background:theme.ui}}>Shiva Trilogy</li>
//           <li style={{background:theme.ui}}>The Hobbit</li>
//         </ul>
//       </div>
//     );
//   }
// }

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className='book-list'
      style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {books.map(book => (
          <li style={{ background: theme.ui }} key={book.id}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booklist;
