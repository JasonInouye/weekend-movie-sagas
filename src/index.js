import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('FETCH_SELECTED_MOVIE', fetchSelectedMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });
    } catch {
        console.log('get all error');
    }
}

function* fetchGenres(action) {
    // get all genres from the DB for single ID
    const id = action.payload;
    try {
        console.log('get all:', action.payload);
        const genres = yield axios.get(`/api/genre/${id}`);
        yield put({ type: 'SET_GENRES', payload: genres });
    } catch {
        console.log('get all error');
    }
}

function* fetchSelectedMovie(action) {
    // get selected movie from the DB for single ID
    const id = action.payload;
    try {
        console.log('get selected movie:', action.payload);
        const genres = yield axios.get(`/api/movie/${id}`);
        yield put({ type: 'SET_SELECTED_MOVIE', payload: genres });
    } catch {
        console.log('get all error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    // console.log( `inside of genres store, ${action.payload.data}`);
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload.data;
        default:
            return state;
    }
}

// Used to store the movie genres
const selectedMovie = (state = [], action) => {
    // console.log( `inside of genres store, ${action.payload.data}`);
    switch (action.type) {
        case 'SET_SELECTED_MOVIE':
            return action.payload.data;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
