import { combineReducers } from 'redux';

import userReducer from "./UserReducer";
import movieReducer from "./MovieReducer";
import newsReducer from  "./NewsReducer";
import fanReducer from "./FanReducer"
import actorReducer from "./ActorReducer"


const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    newsReducer,
    fanReducer,
    actorReducer
});

export default rootReducer;