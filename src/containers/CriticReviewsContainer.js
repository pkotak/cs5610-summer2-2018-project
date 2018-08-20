import React from 'react';
import {connect} from 'react-redux';
import * as reviewActions from "../actions/review";
import CriticReviews from '../components/CriticReviews';

const dispatcherToPropsMapper = (dispatch) => ({
    createReview: (review) => reviewActions.createReview(dispatch, review),
    findAllReviewsForMovie: (movieId) => reviewActions.findAllReviewsForMovie(dispatch, movieId),
    createReview: (review) => reviewActions.createReview(dispatch, review),
    // findAllReviewsForMovie: (movieId) => actions.findAllReviewsForMovie(dispatch, movieId),
    // findUserById: (criticId) => actions.findUserById(dispatch, criticId)
    /*movieName={this.props.movie.original_title}
                                                movieId={this.props.movie.id}
                                                createReview={this.props.createReview}
                                                reviews={this.props.findAllReviewsForMovie(this.props.movie.id)}
                                                */
})

const stateToPropsMapper = (state) => ({
    movie: state.movieReducer.movie,
    review: state.criticReducer.review,
    reviews: state.criticReducer.reviews,
    type: state.userReducer.userType,
    loggedIn: state.userReducer.loggedIn
})

export const CriticReviewsContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(CriticReviews);