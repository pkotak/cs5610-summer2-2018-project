import * as constants from '../constants';

let initialState = {
    nowPlayingMovies: [],
    upcomingMovies: [],
    movies: [],
    movie: {},
    sortToggleOpen: false,
    orderToggleOpen: false,
    sortValue: '',
    orderValue: ''
};

const movieReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.FIND_NOW_PLAYING_MOVIES:
            return {
                nowPlayingMovies: action.nowPlayingMovies.results,
                upcomingMovies: state.upcomingMovies,
                movies: state.movies,
                movie: state.movie
            }

        case constants.FIND_UPCOMING_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: action.upcomingMovies.results,
                movies: state.movies,
                movie: state.movie
            }

        case constants.DISCOVER_MOVIES:
             return {
                 movies: action.movies.results,
                 sortValue: state.sortValue,
                 orderValue: state.orderValue
             }

         case constants.TOGGLE_SORT_DROPDOWN:
             return {
                 movies: state.movies,
                 sortToggleOpen: !state.sortToggleOpen,
                 orderToggleOpen: state.orderToggleOpen,
                 sortValue: state.sortValue,
                 orderValue: state.orderValue
             }

         case constants.TOGGLE_ORDER_DROPDOWN:
             return {
                 movies: state.movies,
                 sortToggleOpen: state.sortToggleOpen,
                 orderToggleOpen: !state.orderToggleOpen,
                 sortValue: state.sortValue,
                 orderValue: state.orderValue
             }

         case constants.SET_SORT_DROPDOWN_VALUE:
             return {
                 movies: state.movies,
                 sortToggleOpen: state.sortToggleOpen,
                 orderToggleOpen: state.orderToggleOpen,
                 sortValue: action.sortValue,
                 orderValue: state.orderValue
             }

         case constants.SET_ORDER_DROPDOWN_VALUE:
             return {
                 movies: state.movies,
                 sortToggleOpen: state.sortToggleOpen,
                 orderToggleOpen: state.orderToggleOpen,
                 sortValue: state.sortValue,
                 orderValue: action.orderValue
             }

        case constants.FIND_POPULAR_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            }

        case constants.SEARCH_MOVIES:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: action.movies.results,
                movie: state.movie
            }

        case constants.FIND_MOVIE_DETAILS:
            return {
                nowPlayingMovies: state.nowPlayingMovies,
                upcomingMovies: state.upcomingMovies,
                movies: state.results,
                movie: action.movie
            }

         default:
             return state;
       }
    };

export default movieReducer;