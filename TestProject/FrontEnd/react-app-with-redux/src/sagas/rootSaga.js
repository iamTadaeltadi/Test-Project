
import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./songs";

export function* rootSaga() {
    yield all([
        watchSongsAsync()
    ])
}