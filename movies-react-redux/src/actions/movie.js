import * as constants from '../constants/index';
import MovieServiceClient from "../services/movie.service.client";

export const findNowPlayingMovies = dispatch => {
    fetch(constants.NOW_PLAYING_MOVIE_URL)
        .then(response => response.json())
        .then(nowPlayingMovies => dispatch({
            type: constants.FIND_NOW_PLAYING_MOVIES,
            nowPlayingMovies: nowPlayingMovies
        }))
}

export const findUpcomingMovies = dispatch => {
    fetch(constants.UPCOMING_MOVIE_URL)
        .then(response => response.json())
        .then(upcomingMovies => dispatch({
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

export const discoverMovies = (dispatch, sortBy, sortOrder) => {
    fetch(constants.DISCOVER_MOVIE_URL + '?sort_by=' + sortBy + '&order=' + sortOrder)
        .then(response => response.json())
        .then(movies => dispatch({
            type: constants.DISCOVER_MOVIES,
            movies: movies
        }))
}

export const favoriteMovie = (dispatch, movieId, favorite) => {
    fetch(constants.BASE_URL + 'movie/' + movieId + '/favorite', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(favorite)
    })
        .then(response => response.json())
        .then(favorite => dispatch({
            type: constants.FAVORITE_MOVIE,
            favorite: favorite
        }))
}

export const watchListMovie = (dispatch, movieId, watchlist) => {
    console.log("Action: Adding to watchlist", movieId);
    fetch(constants.BASE_URL + 'movie/' + movieId + '/watchlist', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(watchlist)
    })
        .then(response => response.json())
        .then(watchlist => dispatch({
            type: constants.WATCHLIST_MOVIE,
            watchlist: watchlist
        }))
}

export const toggleSortDropdown = (dispatch) => {
    dispatch({
        type: constants.TOGGLE_SORT_DROPDOWN
    })
}

export const toggleOrderDropdown = (dispatch) => {
    dispatch({
        type: constants.TOGGLE_ORDER_DROPDOWN
    })
}

export const setSortDropdownValue = (dispatch, value) => {
    dispatch({
        type: constants.SET_SORT_DROPDOWN_VALUE,
        sortValue: value
    })
}

export const setOrderDropdownValue = (dispatch, value) => {
    dispatch({
        type: constants.SET_ORDER_DROPDOWN_VALUE,
        orderValue: value
    })
}

export function fetchFavouriteMovies(dispatch) {
    let movieServiceClient = MovieServiceClient.instance;
    movieServiceClient
        .getFavoriteMovies()
        .then(response => {
            response.json()
                .then((result) => {
                    dispatch({
                        type: constants.FETCH_FAVORITE_MOVIES,
                        favoriteMovies: result
                    })
                });
        });
}

export function dislikeMovie(dispatch, movie) {
    let movieServiceClient = MovieServiceClient.instance;
    movieServiceClient
        .saveDislike(movie)
        .then(response => {
            alert('Disliked Movie ' + movie.title);
            movieServiceClient
                .getFavoriteMovies()
                .then(response => {
                    response.json()
                        .then((result) => {
                            dispatch({
                                type: constants.FETCH_FAVORITE_MOVIES,
                                favoriteMovies: result
                            })
                        });
                });
        })
}

export function movieLiked(dispatch, movie) {
    let movieServiceClient = MovieServiceClient.instance;
    movieServiceClient
        .saveLike(movie)
        .then(response => {
            if (response.status === 501) {
                alert("Already liked");
            }
            else if (response.status === 500) {
                alert("Try Logging in");
            }
            else {
                alert("Liked Movie " + movie.title);
            }
        })
}