import React, { Component } from 'react'
import {Provider} from 'react-redux';
import rootReducer from './reducers/';
import HomePageContainer from './containers/HomePageContainer'
import NewsPageContainer from './containers/NewsPageContainer'
import MovieDetailContainer from './containers/MovieDetailContainer';
import {createStore} from "redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import DiscoverMoviesContainer from "./containers/DiscoverMoviesContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfileContainer from "./containers/ProfileContainer";
import RegistrationContainer from "./containers/RegistrationContainer";
import PopularNewsContainer from "./containers/PopularNewsContainer";
import ExternalReviewsContainer from "./containers/ExternalReviewsContainer";

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
                            <Route exact path='/news/top' component={NewsPageContainer}/>
                            <Route exact path='/news/popular' component={PopularNewsContainer}/>
                            <Route exact path='/news/reviews' component={ExternalReviewsContainer}/>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}