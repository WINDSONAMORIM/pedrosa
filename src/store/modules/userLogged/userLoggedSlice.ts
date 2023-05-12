import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../typeStore";

const initialState: User = {
  id: "",
  email: "",
  name: "",
  password: "",
  profile: "",
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUserLogged: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      // state.password = action.payload.password;
      state.profile = action.payload.profile;
    },
    clearUserLogged: (state) => {
      return initialState;
    },
  },
});

export const { setUserLogged, clearUserLogged } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
