import ProfileReducer from "./Reducers/ProfileReducer";
import AuthReducer from "./Reducers/AuthReducer";
import AppReducer from "./Reducers/AppReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import DialogsReducer from "./Reducers/DialogsReducer";

let reducers = combineReducers({
  Auth: AuthReducer,
  App: AppReducer,
  Profile: ProfileReducer,
  Dialogs: DialogsReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
