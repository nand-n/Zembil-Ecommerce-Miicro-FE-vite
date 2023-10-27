// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import orebiReducer from "./orebiSlice";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTool } from "redux-devtools-extension";
// import rootReducer from "./rootReducer";

// import { composeWithDevTools } from 'redux-devtools-extension';
// import loggerMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';


// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, orebiReducer);

// export const store = configureStore({
//   reducer: { orebiReducer: persistedReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });


// const initialState = {};
// const middleware = [thunk];

// Wrap your rootReducer with Redux Persist
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store using Redux Toolkit's configureStore
// export const store = configureStore({
//   reducer: { orebiReducer: persistedReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(middleware), // Add your existing middleware here
// });

// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import reducer from './reducers';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage: storage,
//     whitelist: ['reducer'] // or blacklist to exclude specific reducers
//  };
// const presistedReducer = persistReducer(persistConfig, rootReducer );
// export const store = createStore(presistedReducer, 
// composeWithDevTools(applyMiddleware(thunk)));
// export const persistor = persistStore(store);

// export let persistor = persistStore(store);





import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };