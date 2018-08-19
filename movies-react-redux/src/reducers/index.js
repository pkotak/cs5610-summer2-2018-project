import {combineReducers} from 'redux';

import userReducer from "./UserReducer";
import movieReducer from "./MovieReducer";
import newsReducer from "./NewsReducer";
import fanReducer from "./FanReducer"
import actorReducer from "./ActorReducer"
import adminReducer from "./AdminReducer"


const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    newsReducer,
    fanReducer,
    actorReducer,
    adminReducer
});

export default rootReducer;