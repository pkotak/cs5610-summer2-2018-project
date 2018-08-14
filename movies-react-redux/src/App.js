import React, { Component } from 'react'
import {Provider} from 'react-redux';
import Reducer from './reducers/Reducer';
import rootReducer from './reducers/';
import newsReducer from './reducers/NewsReducer'
import HomePageContainer from './containers/HomePageContainer'
import NewsPageContainer from './containers/NewsPageContainer'
import MovieDetailContainer from './containers/MovieDetailContainer';
import movieReducer from './reducers/MovieReducer';
import {combineReducers, createStore} from "redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DiscoverMoviesContainer from "./containers/DiscoverMoviesContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";
import RegistrationContainer from "./containers/RegistrationContainer";

//const store = createStore(Reducer);
const store = createStore(rootReducer );

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route exact path='/' component={HomePageContainer}/>
                            <Route path='/login' component={LoginContainer}/>
                            <Route path='/register' component={RegistrationContainer}/>
                            <Route path='/profile' component={ProfileContainer}/>
                            <Route exact path='/discover' component={DiscoverMoviesContainer}/>
                            <Route exact path='/movie/:movieId' component={MovieDetailContainer}/>
                            <Route exact path='/news' component={NewsPageContainer}/>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}