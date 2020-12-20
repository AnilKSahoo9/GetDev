// import { persistReducer } from "redux-persist";
import FetchUserData from "./user.reducer";
import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: [],
// };

const rootReducer = combineReducers({ fetchUserData: FetchUserData });
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
// //persistReducer(persistConfig, rootReducer);
