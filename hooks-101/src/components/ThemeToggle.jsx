import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle Theme</button>;
//   }
// }

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
