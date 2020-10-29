import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "@react-native-community/async-storage";
import ui from "./reducers/ui/ui";
import listings from "./reducers/listings/listings";
const rootReducer = combineReducers({
  ui: ui,
  listings: listings,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ui"],
};

const middleware = applyMiddleware(thunk);

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const STORE = createStore(
  persistedReducer,
  composeEnhancers(middleware)
);
export const PERSISTOR = persistStore(STORE);
