import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    storCachedReesults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storCachedReesults } = searchSlice.actions;
export default searchSlice.reducer;
