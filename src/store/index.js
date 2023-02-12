import { configureStore } from "@reduxjs/toolkit";
import { addMovie, removeMovie, moviesReducer } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer
  }
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
