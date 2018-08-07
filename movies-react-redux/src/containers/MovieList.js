import React from 'react';
import MovieCard from '../components/MovieCard';
import {connect} from 'react-redux';
import * as actions from '../actions/movie';

const dispatcherToPropsMapper = (dispatch) => ({
  findPopularMovies: () => actions.findPopularMovies(dispatch)
})

const stateToPropsMapper = (state) => ({
    movies: state.movies
})

const MovieList = connect(stateToPropsMapper, dispatcherToPropsMapper)(MovieCard);

export default MovieList;



