import React, {Component} from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./seasons";
import Spinner from "./spinner";

class App extends Component {
  state = {latitude: null, errorMessage: ""};
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({latitude: position.coords.latitude});
      },
      (err) => {
        this.setState({errorMessage: err.message});
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonsDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="Allow/Decline Permission for location Request" />;
  }
}
export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
