import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { apiGet, apiPost } from "../../../services/ApiService";
import { ResponseAPI, SaveUser } from "../../../services/types";
import { User } from "../typeStore";

const usersAdapter = createEntityAdapter<User>({
  selectId: (state) => state.email,
});

export const { selectAll: searchUsers, selectById: buscarUsuarioPorEmail } =
  usersAdapter.getSelectors<RootState>((state) => state.users);

export const addUser = createAsyncThunk<ResponseAPI, SaveUser>(
  "users/addUser",
  async (dados: SaveUser) => {
    const resposta = await apiPost("/users", dados);
    return resposta;
  }
);

export const getUserAll = createAsyncThunk("/users/getUserAll", async () => {
  const resposta = await apiGet("/users");
  return resposta;
});

// export const getUserByEmail = createAsyncThunk(
//   "/login/getUserByEmail",
//   async ({email, password}:any) => {
//     const resposta = await apiPost("/login", {email,password});
//     return resposta;
//   }
// );

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({
    success: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addUser.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          usersAdapter.addOne(state, action.payload.data);
        }
        state.success = action.payload.success;
      }
    );
    builder.addCase(
      getUserAll.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          usersAdapter.setAll(state, action.payload.data);
        }
      }
    );
    // builder.addCase(
    //   getUserByEmail.fulfilled,
    //   (state, action: PayloadAction<ResponseAPI>) => {
    //     usersAdapter.setOne(state, action.payload.data);
    //   }
    // );
  },
});

export const usersReducer = usersSlice.reducer;
