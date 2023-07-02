import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { apiGet, apiPost } from "../../../services/ApiService";
import { ResponseAPI } from "../../../services/types";
import { Client } from "../typeStore";

const clientsAdapter = createEntityAdapter<Client>({
  selectId: (state) => state.id,
});

export const { selectAll: searchClients, selectById: searchClientsById } =
  clientsAdapter.getSelectors<RootState>((state) => state.clients);

// export const addUser = createAsyncThunk<ResponseAPI, SaveUser>(
//   "users/addUser",
//   async (dados: SaveUser) => {
//     const resposta = await apiPost("/users", dados);
//     return resposta;
//   }
// );

export const getClientsAll = createAsyncThunk(
  "/clients/getClientsAll",
  async () => {
    const resposta = await apiGet("/clients");
    return resposta;
  }
);

export const searchClientsName = createAsyncThunk(
  "/clients/seachClients",
  async (name: any) => {
    console.log(name);
    const resposta = await apiGet(`/clients/${name}`);
    console.log(resposta);
    return resposta;
  }
);

// export const getUserByEmail = createAsyncThunk(
//   "/login/getUserByEmail",
//   async ({email, password}:any) => {
//     const resposta = await apiPost("/login", {email,password});
//     return resposta;
//   }
// );

const clientsSlice = createSlice({
  name: "clients",
  initialState: clientsAdapter.getInitialState({
    success: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(
    //   addUser.fulfilled,
    //   (state, action: PayloadAction<ResponseAPI>) => {
    //     if (action.payload.success) {
    //       clientsAdapter.addOne(state, action.payload.data);
    //     }
    //     state.success = action.payload.success;
    //   }
    // );
    builder.addCase(
      getClientsAll.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          clientsAdapter.setAll(state, action.payload.data);
        }
      }
    );
    builder.addCase(
      searchClientsName.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          console.log("Slice");
          clientsAdapter.setAll(state, action.payload.data);
        }
      }
    );

    // builder.addCase(
    //   getUserByEmail.fulfilled,
    //   (state, action: PayloadAction<ResponseAPI>) => {
    //     clientsAdapter.setOne(state, action.payload.data);
    //   }
    // );
  },
});

export const clientsReducer = clientsSlice.reducer;
