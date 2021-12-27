import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID o9Sm3c8WPR2MJqNizlXuQbS9GGPUOML-LfDI2SUhl70",
  },
});
