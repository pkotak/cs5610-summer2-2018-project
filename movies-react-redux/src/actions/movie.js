import * as constants from '../constants/index';

export const findUpcomingMovies = dispatch => {
    fetch(constants.UPCOMING_MOVIE_URL)
        .then(response => response.json())
        .then (upcomingMovies => dispatch({
            type: constants.FIND_UPCOMING_MOVIES,
            upcomingMovies: upcomingMovies
        }))
}

export const findPopularMovies = dispatch => {
    fetch(constants.POPULAR_MOVIE_URL)
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.FIND_POPULAR_MOVIES,
            movies: movies
        }))
}

export const searchMovie = (dispatch, searchText) => {
    fetch(constants.MOVIE_SEARCH_URL + '/' + searchText)
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.SEARCH_MOVIES,
            movies: movies
        }))
}