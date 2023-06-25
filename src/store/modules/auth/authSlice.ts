import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { apiPost } from "../../../services/ApiService";
import { ResponseAPI} from "../../../services/types";
import { Auth } from "../typeStore";

const authAdapter = createEntityAdapter<Auth>({
  selectId: (state) => state.email,
});

export const { selectAll: searchAuth, selectById: authByEmail } =
  authAdapter.getSelectors<RootState>((state) => state.auth);

export const auth = createAsyncThunk<ResponseAPI, Auth>(
  "login/auth",
  async (dados: Auth) => {
    const resposta = await apiPost("/login", dados);
    return resposta;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: authAdapter.getInitialState({
    success: false,    
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      auth.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          //auth.addOne(state, action.payload.data);
        }
        state.success = action.payload.success;
        console.log(state.entities)
        console.log(state.ids)
      }
    );
  },
});

export const authReducer = authSlice.reducer;
