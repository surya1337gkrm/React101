import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component {
  state = { isAuthenticated: false };
  toggleAuth = () => {
    this.setState({
      ...this.state,
      isAuthenticated: !this.state.isAuthenticated,
    });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
