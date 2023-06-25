import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Auth, User } from "../typeStore";
import { ResponseAPI } from "../../../services/types";
import { apiPost } from "../../../services/ApiService";

const initialState: User = {
  id: "",
  email: "",
  name: "",
  password: "",
  profile: "",
  token: "",
};

export const getUserByEmail = createAsyncThunk(
  "/login/getUserByEmail",
  async ({ email, password }: Auth) => {
    const resposta = await apiPost("/login", { email, password });
    return resposta;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(
      getUserByEmail.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          Object.assign(state, action.payload.data);
        }
        if (!action.payload.success) {
          Object.assign(state, initialState);
        }
      }      
    );
  },
});

export const { setUserLogged, clearUserLogged } = userLoggedSlice.actions;
export const userLoggedReducer = userLoggedSlice.reducer;
