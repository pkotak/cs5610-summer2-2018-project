import * as constants from '../constants';

let initialState = {
    nowPlayingMovies: [],
    upcomingMovies: [],
    movies: []
};

const movieReducer = (state = initialState, action) => {


    switch (action.type) {
        case constants.FIND_NOW_PLAYING_MOVIES:
            return {
                nowPlayingMovies: action.nowPlayingMovies.results,
                upcomingMovies: state.upcomingMovies,
                movies: state.movies
            };

        case constants.FIND_UPCOMING_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: action.upcomingMovies.results,
                movies: state.movies
            };

        case
        constants.FIND_POPULAR_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results
            };

        case
        constants.SEARCH_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results
            };

        default:
            return state;
    }
};

export default movieReducer;