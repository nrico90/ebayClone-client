import { combineReducers } from "redux";
import advertisementsReducer from "./advertisements";
import advertisementReducer from "./advertisement";

export default combineReducers({
  advertisements: advertisementsReducer,
  advertisement: advertisementReducer
});
