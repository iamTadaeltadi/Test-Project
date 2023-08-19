import { configureStore } from "@reduxjs/toolkit";
import songsReducer from './features/songSlice';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga";
import modalReducer from './features/FormmodalSlice'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
     modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
