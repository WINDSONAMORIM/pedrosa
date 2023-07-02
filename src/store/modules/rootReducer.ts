import { combineReducers } from "redux";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";
import { usersReducer } from "./users/userSlice";
import { authReducer } from "./auth/authSlice";
import { clientsReducer } from "./clients/clientsSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  userLogged: userLoggedReducer,
  clients: clientsReducer,
  auth: authReducer
});

export { rootReducer };
