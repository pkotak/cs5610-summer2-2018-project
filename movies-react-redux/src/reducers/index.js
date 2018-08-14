import { combineReducers } from 'redux';

import userReducer from "./UserReducer";
import movieReducer from "./MovieReducer";
import newsReducer from  "./NewsReducer";

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    newsReducer
});

export default rootReducer;