import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/movie';
import MovieList from "./MovieList";

const dispatcherToPropsMapper = (dispatch) => ({
    findPopularMovies: () => actions.findPopularMovies(dispatch),
    searchMovie: (searchText) => actions.searchMovie(dispatch, searchText)
})

const stateToPropsMapper = (state) => ({
    movies: state.movies
})

const HomePageContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(MovieList);

export default HomePageContainer;



