import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: null, token: null, login: null };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore(state, actions) {
      state.login = actions.payload.login;
      state.token = actions.payload.token;
      state.id = actions.payload.id;
    },
    clearUserFromStore(state) {
      state.login = null;
      state.token = null;
      state.id = null;
    },
  },
});

export default userSlice.reducer;
export const { addUserToStore, clearUserFromStore } = userSlice.actions;