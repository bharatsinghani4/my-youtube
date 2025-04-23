import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MESSAGES_MAX_COUNT } from "../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.splice(LIVE_CHAT_MESSAGES_MAX_COUNT, 1);
      state.chatMessages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
