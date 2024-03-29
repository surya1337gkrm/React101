//import "../apis/jsonPlaceholder";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({type: "FETCH_POSTS", payload: response.data});
  };
};

export const fetchUser = (id) => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: "FETCH_USER", payload: response.data});
  };
};
