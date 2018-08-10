import * as constants from '../constants';

let initialState = {
    upcomingMovies: [],
    movies: []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FIND_UPCOMING_MOVIES:
            return {
                upcomingMovies: action.upcomingMovies.results,
                movies: state.movies
            }

        case
        constants.FIND_POPULAR_MOVIES:
            return {upcomingMovies: state.upcomingMovies,
                movies: action.movies.results}

        case
        constants.SEARCH_MOVIES:
            return {upcomingMovies: state.upcomingMovies,
                movies: action.movies.results}

        default:
            return state;
    }
};

export default movieReducer;