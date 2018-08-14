import * as constants from '../constants';

let initialState = {
    //movies
    nowPlayingMovies: [],
    upcomingMovies: [],
    movies: [],
    movie: {},
    sortToggleOpen: false,
    orderToggleOpen: false,
    sortValue: '',
    orderValue: '',

    //login
    username: '',
    password: '',
    verifyPassword: '',
    dob: '',
    description: '',
    userType: undefined,
    loggedIn: false

};

const Reducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {

        //Login
        case constants.TEXT_CHANGED:
            newState = Object.assign({}, state);
            if (action.fieldType === 'username') {
                newState.username = action.text;
            } else if (action.fieldType === 'password') {
                newState.password = action.text;
            } else if (action.fieldType === 'firstName') {
                newState.firstName = action.text;
            } else if (action.fieldType === 'lastName') {
                newState.lastName = action.text;
            } else if (action.fieldType === 'email') {
                newState.email = action.text;
            } else if (action.fieldType === 'dob') {
                newState.dob = action.text;
            } else if (action.fieldType === 'city') {
                newState.city = action.text;
            } else if (action.fieldType === 'verifyPassword') {
                newState.verifyPassword = action.text
            } else if (action.fieldType === 'phone') {
                newState.phone = action.text;
            } else if (action.fieldType === 'description') {
                newState.description = action.text
            }
            return newState;

        case constants.FETCH_PROFILE:
            newState = Object.assign({}, state);
            newState.username = action.data.username;
            newState.firstName = action.data.firstName;
            newState.lastName = action.data.lastName;
            newState.email = action.data.email;
            newState.password = '';
            newState.verifyPassword = '';
            newState.dob = action.data.dob;
            newState.phone = action.data.phone;
            newState.userType = action.data.type;
            newState.city = action.data.city;
            newState.description = action.data.description;
            return newState;

        case constants.SAVE_USER_TYPE:
            newState = Object.assign({}, state);
            newState.userType = action.userType;
            return newState;

        case constants.SAVE_USERNAME_AND_USERTYPE:
            newState = Object.assign({}, state);
            newState.username = action.username;
            newState.userType = action.userType;
            newState.loggedIn = true;
            return newState;


        case constants.LOGOUT:
            newState = Object.assign({}, state);
            newState.loggedIn = false;
            return newState;

        //Movies
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

export default Reducer;