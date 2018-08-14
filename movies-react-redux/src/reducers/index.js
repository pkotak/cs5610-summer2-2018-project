import { combineReducers } from 'redux';

import userReducer from "./UserReducer"
import movieReducer from "./MovieReducer";

const rootReducer = combineReducers({
    userReducer,
    movieReducer
});

export default rootReducer;