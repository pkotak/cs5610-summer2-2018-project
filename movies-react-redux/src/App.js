import React, { Component } from 'react'
import HomePageContainer from './containers/HomePageContainer'
import NewsPageContainer from './containers/NewsPageContainer'
import MovieDetailContainer from './containers/MovieDetailContainer';
import {Provider} from 'react-redux';
import movieReducer from './reducers/MovieReducer';
import newsReducer from './reducers/NewsReducer'
import {combineReducers, createStore} from "redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DiscoverMoviesContainer from "./containers/DiscoverMoviesContainer";

const store = createStore(movieReducer);
// const store = createStore(newsReducer);
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route exact path='/' component={HomePageContainer}/>
                            <Route exact path='/discover' component={DiscoverMoviesContainer}/>
                            <Route exact path='/movie/:movieId' component={MovieDetailContainer}/>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}