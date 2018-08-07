import * as constants from '../constants/index';

export const findPopularMovies = dispatch => {
    fetch(constants.MOVIE_URL)
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.FIND_POPULAR_MOVIES,
            movies: movies
        }))
}