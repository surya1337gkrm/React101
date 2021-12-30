import React, {Component} from "react";
import SearchBar from "./searchBar";

import "../apis/youtube";
import youtube from "../apis/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

const KEY = "AIzaSyCiZAEUQgdngMs7gC0w_xWObhN4Gh7-8mc";

class App extends Component {
  state = {videos: [], selectedVideo: null};

  componentDidMount() {
    this.onTermSubmit("react");
  }

  onTermSubmit = async (term) => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        key: KEY,
      },
    });

    //console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
