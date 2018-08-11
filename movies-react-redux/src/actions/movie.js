import * as constants from '../constants/index';

export const findNowPlayingMovies = dispatch => {
    fetch(constants.NOW_PLAYING_MOVIE_URL)
        .then(response => response.json())
        .then (nowPlayingMovies => dispatch({
            type: constants.FIND_NOW_PLAYING_MOVIES,
            nowPlayingMovies : nowPlayingMovies
        }))
}

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
    fetch(constants.MOVIE_SEARCH_URL + '/search/' + searchText)
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.SEARCH_MOVIES,
            movies: movies
        }))
}

export const findMovieDetails = (dispatch, movieId) => {
    fetch(constants.MOVIE_SEARCH_URL + '/detail/' + movieId)
        .then(response => response.json())
        .then(movie => dispatch({
            type: constants.FIND_MOVIE_DETAILS,
            movie: movie
        }))
}
