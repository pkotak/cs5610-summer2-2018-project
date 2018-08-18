import { combineReducers } from 'redux';

import userReducer from "./UserReducer";
import movieReducer from "./MovieReducer";
import newsReducer from  "./NewsReducer";
import fanReducer from "./FanReducer"

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    newsReducer,
    fanReducer
});

export default rootReducer;