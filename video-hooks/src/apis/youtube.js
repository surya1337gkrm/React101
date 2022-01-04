import axios from "axios";

//const KEY = "AIzaSyCiZAEUQgdngMs7gC0w_xWObhN4Gh7-8mc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
