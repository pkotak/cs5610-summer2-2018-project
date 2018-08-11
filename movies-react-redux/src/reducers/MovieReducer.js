import * as constants from '../constants';

let initialState = {
    movies: [],
    movie: {},
    sortToggleOpen: false,
    orderToggleOpen: false,
    sortValue: '',
    orderValue: ''
};

const movieReducer = (state = initialState, action) => {
       switch (action.type) {
           case constants.FIND_POPULAR_MOVIES:
               return {movies: action.movies.results}

           case constants.DISCOVER_MOVIES:
               return {
                   movies: action.movies.results,
                   sortValue: state.sortValue,
                   orderValue: state.orderValue

               }

           case constants.SEARCH_MOVIES:
               return {movies: action.movies.results}

           case constants.FIND_MOVIE_DETAILS:
               return {movie: action.movie}

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

           default:
               return state;
       }
    };

export default movieReducer;