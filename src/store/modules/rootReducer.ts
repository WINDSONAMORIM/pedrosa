import { combineReducers } from "redux";
import { userLoggedReducer } from "./userLogged/userLoggedSlice";
import { usersReducer } from "./users/userSlice";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  userLogged: userLoggedReducer,
  auth: authReducer
});

export { rootReducer };
