import { createStoreHook } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import locationReducer from "../reducers/locationReducer";
import weatherReducer from "../reducers/weatherReducer";
require('dotenv').config()


const composeFunction =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const initialState = {
  locations: {
    currentCity: "",
    homeCity: "",
    coordinates: {
      longitude: "",
      latitude: "",
    },
  },
  weather: {
    current: [],
    forecast: [],
  },
};

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_WEATHER_API_KEY!,
    }),
  ],
};

const bigReducer = combineReducers({
  locations: locationReducer,
  weather: weatherReducer,
});

const persistedBigReducer = persistReducer(persistConfig, bigReducer);

const configureStore = () => {
  let store = createStore(
    persistedBigReducer,
    initialState,
    composeFunction(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export const { store, persistor } = configureStore();
