import {combineReducers} from "redux";

import postsReducer from "../reducers/postsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  posts: postsReducer,
  users: userReducer,
});
