import * as constants from '../constants';

let initialState = {
    movies: []
};

const movieReducer = (state = initialState, action) => {
       switch (action.type) {
           case constants.FIND_POPULAR_MOVIES:
               return {movies: action.movies.results}

           case constants.SEARCH_MOVIES:
               return {movies: action.movies.results}

           default:
               return state;
       }
    };

export default movieReducer;