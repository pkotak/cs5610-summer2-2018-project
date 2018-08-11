import * as constants from '../constants';

let initialState = {
    nowPlayingMovies: [],
    upcomingMovies: [],
    movies: [],
    movie: {}
};

const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.FIND_NOW_PLAYING_MOVIES:
            return {
                nowPlayingMovies: action.nowPlayingMovies.results,
                upcomingMovies: state.upcomingMovies,
                movies: state.movies,
                movie: state.movie
            };

        case constants.FIND_UPCOMING_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: action.upcomingMovies.results,
                movies: state.movies,
                movie: state.movie
            };

        case constants.FIND_POPULAR_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            };

        case constants.SEARCH_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            };

        case constants.FIND_MOVIE_DETAILS:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: state.results,
                movie: action.movie
            };

         default:
             return state;
       }
    };

export default movieReducer;