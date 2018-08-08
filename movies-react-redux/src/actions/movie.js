import * as constants from '../constants/index';

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