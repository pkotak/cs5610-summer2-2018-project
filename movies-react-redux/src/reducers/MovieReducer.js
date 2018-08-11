import * as constants from '../constants';

let initialState = {
    movies: [],
    movie: {}
};

const movieReducer = (state = initialState, action) => {
       switch (action.type) {
           case constants.FIND_POPULAR_MOVIES:
               return {movies: action.movies.results}

           case constants.SEARCH_MOVIES:
               return {movies: action.movies.results}

           case constants.FIND_MOVIE_DETAILS:
               return {movie: action.movie}

           default:
               return state;
       }
    };

export default movieReducer;