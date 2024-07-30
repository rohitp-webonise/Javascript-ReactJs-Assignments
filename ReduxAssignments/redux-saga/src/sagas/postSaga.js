

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from '../actions/postActions';

function* fetchPostsSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* postSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default postSaga;
