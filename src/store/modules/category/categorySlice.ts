import { PayloadAction, createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Category } from "../typeStore";
import { RootState } from "../..";
import { apiGet } from "../../../services/ApiService";
import { ResponseAPI } from "../../../services/types";


const categoryAdapter = createEntityAdapter<Category>({
  selectId: (state) => state.id,
});

export const { selectAll: searchCategories, selectById: searchCategoryById } =
  categoryAdapter.getSelectors<RootState>((state) => state.category);

// export const addClient = createAsyncThunk<ResponseAPI, SaveClient>(
//   "clients/addClient",
//   async (dados: SaveClient) => {
//     const resposta = await apiPost("/clients", dados);
//     return resposta;
//   }
// );

export const getCategoriesAll = createAsyncThunk(
  "/category/getCategoriesAll",
  async () => {
    const resposta = await apiGet("/category");
    return resposta;
  }
);

// export const searchClientsName = createAsyncThunk(
//   "/clients/seachClients",
//   async (name: any) => {
//     console.log(name);
//     const resposta = await apiGet(`/clients/${name}`);
//     console.log(resposta);
//     return resposta;
//   }
// );

// // export const getUserByEmail = createAsyncThunk(
// //   "/login/getUserByEmail",
// //   async ({email, password}:any) => {
// //     const resposta = await apiPost("/login", {email,password});
// //     return resposta;
// //   }
// // );

const categorySlice = createSlice({
  name: "categories",
  initialState: categoryAdapter.getInitialState({
    success: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
//     builder.addCase(
//       addClient.fulfilled,
//       (state, action: PayloadAction<ResponseAPI>) => {
//         if (action.payload.success) {
//           clientsAdapter.addOne(state, action.payload.data);
//         }
//         state.success = action.payload.success;
//       }
//     );
    builder.addCase(
      getCategoriesAll.fulfilled,
      (state, action: PayloadAction<ResponseAPI>) => {
        if (action.payload.success) {
          categoryAdapter.setAll(state, action.payload.data);
        }
      }
    );
//     builder.addCase(
//       searchClientsName.fulfilled,
//       (state, action: PayloadAction<ResponseAPI>) => {
//         if (action.payload.success) {
//           console.log("Slice");
//           clientsAdapter.setAll(state, action.payload.data);
//         }
//       }
//     );

//     // builder.addCase(
//     //   getUserByEmail.fulfilled,
//     //   (state, action: PayloadAction<ResponseAPI>) => {
//     //     clientsAdapter.setOne(state, action.payload.data);
//     //   }
//     // );
  },
});

export const categoriesReducer = categorySlice.reducer;
