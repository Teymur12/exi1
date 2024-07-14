import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user.slice';
import postReducer from '../slices/post.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer
  }
});

export default store;