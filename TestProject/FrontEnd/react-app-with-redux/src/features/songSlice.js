import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addsongSlice: (state, action) => {
      state.push(action.payload);
    },

    getsongsSlice: (state, action) => {
      return action.payload;
    },

    editsongSlice: (state, action) => {
      const { id, title, artist, imageData ,audioDataAsBase64} = action.payload;
      console.log({ id, title, artist, imageData,audioDataAsBase64 })
      const existingSong = state.find(song => song.id === id);
      if (existingSong) {
        existingSong.title = title;
        existingSong.artist = artist;
        existingSong.imageData = imageData;
        existingSong.audioDataAsBase64 =audioDataAsBase64;
      }
    },

    deletesongSlice: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(song => song.id !== idToDelete);
    },
  },
});

export const { getsongsSlice, addsongSlice, editsongSlice, deletesongSlice } = songsSlice.actions;

export default songsSlice.reducer;
