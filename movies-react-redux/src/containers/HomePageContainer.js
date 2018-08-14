import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/movie';
import MovieList from "./MovieList";

const dispatcherToPropsMapper = (dispatch) => ({
    findNowPlayingMovies: () => actions.findNowPlayingMovies(dispatch),
    findUpcomingMovies: () => actions.findUpcomingMovies(dispatch),
    findPopularMovies: () => actions.findPopularMovies(dispatch),
    searchMovie: (searchText) => actions.searchMovie(dispatch, searchText)
});

const stateToPropsMapper = (state) => ({
    nowPlayingMovies: state.movieReducer.nowPlayingMovies,
    upcomingMovies: state.movieReducer.upcomingMovies,
    movies: state.movieReducer.movies,
    type: state.movieReducer.userType
});

const HomePageContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(MovieList);

export default HomePageContainer;



