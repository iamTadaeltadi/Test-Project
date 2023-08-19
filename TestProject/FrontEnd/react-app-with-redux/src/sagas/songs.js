import { call, put, takeEvery } from 'redux-saga/effects';
import {
  getSongsAPI,
  createsongAPI,
  updatesongAPI,
  deletesongByIdAPI
} from '../apis/index';
import {
  addsongSlice,
  deletesongSlice,
  editsongSlice,
  getsongsSlice
} from '../features/songSlice';
import {
  DELETE_SONG_BY_ID,
  UPDATE_SONG_BY_ID,
  CREATE_SONG,
  GET_SONGS
} from './types/index';

export function* getsongsSaga() {
  try {
    const songs = yield call(getSongsAPI);
    yield put(getsongsSlice(songs.data));
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}

function* handleApiRequest(apiFunction, action) {
  try {
    const response = yield call(apiFunction, action.payload);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}

export function* createsongSaga(action) {
   
  try {
    
    const songData = {
      title: action.song.title, 
      artist: action.song.artist, 
      imageData: action.song.imageData ,
      audioDataAsBase64: action.song.audioDataAsBase64 
    };
    console.log(songData)
    
    const song = yield call(handleApiRequest, createsongAPI, {
      ...action,
      payload: songData
    });

    yield put(addsongSlice(song));
  } catch (error) {
    console.error('Error creating song:', error);
  }
}

export function* updatesongSaga(action) {
  try {
    const { id, updatedSongData } = action;
    const {title,artist,imageData,audioDataAsBase64} = updatedSongData;
    console.log({title,artist,audioDataAsBase64,id})
    
    yield call(updatesongAPI, id, {id,title,imageData,artist,audioDataAsBase64});
    yield put(editsongSlice({id,title,imageData,artist,audioDataAsBase64}));
  } catch (error) {
    console.error('Error updating song:', error);
  }
}
export function* deletesongByIdSaga(action) {
    yield deletesongByIdAPI(action.id)
    yield put(deletesongSlice(action.id))
}

export function* watchSongsAsync() {
    yield takeEvery(GET_SONGS, getsongsSaga)
    yield takeEvery(CREATE_SONG, createsongSaga)
    yield takeEvery(UPDATE_SONG_BY_ID, updatesongSaga)
    yield takeEvery(DELETE_SONG_BY_ID, deletesongByIdSaga)
}


