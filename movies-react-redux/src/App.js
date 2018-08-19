import React, {Component} from 'react'
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
import NavigationBar from "./components/NavigationBar";
import FanPageContainer from "./containers/FanPageContainer";
import FavoriteMoviesContainer from "./containers/FavoriteMoviesContainer";
import ExploreUsersContainer from "./containers/ExploreUsersContainer";
import FollowedFansContainer from "./containers/FollowedFansContainer";
import ActorPageContainer from "./containers/ActorPageContainer";
import ActorEventContainer from "./containers/ActorEventsContainer";
import AdminPageContainer from "./containers/AdminPageContainer";
import AllFavoriteMoviesContainer from "./containers/AllFavoriteMoviesContainer";
import WatchlistMoviesContainer from "./containers/WatchlistMovieContainer";

const store = createStore(rootReducer);

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <div className="m-0">
                                <Route path="/"
                                       component={NavigationBar}/>
                            </div>
                            <div className="m-0">
                                <Route exact path='/' component={HomePageContainer}/>
                                <Route path='/login' component={LoginContainer}/>
                                <Route path='/register' component={RegistrationContainer}/>
                                <Route path='/profile' component={ProfileContainer}/>
                                <Route exact path='/my-page' component={FanPageContainer}/>
                                <Route path='/my-page-actor' component={ActorPageContainer}/>
                                <Route path='/my-page-actor/create-event' component={ActorEventContainer}/>
                                <Route path='/my-page/favorite-movies' component={FavoriteMoviesContainer}/>
                                <Route path='/my-page/watchlist-movies' component={WatchlistMoviesContainer}/>
                                <Route path='/explore' component={ExploreUsersContainer}/>
                                <Route path='/my-page/fans-followed' component={FollowedFansContainer}/>
                                <Route exact path='/discover' component={DiscoverMoviesContainer}/>
                                <Route exact path='/movie/:movieId' component={MovieDetailContainer}/>
                                <Route exact path='/news/top' component={NewsPageContainer}/>
                                <Route exact path='/news/popular' component={PopularNewsContainer}/>
                                <Route exact path='/news/reviews' component={ExternalReviewsContainer}/>
                                <Route path='/admin-page' component={AdminPageContainer}/>
                                <Route path='/all-favourite-movies' component={AllFavoriteMoviesContainer}/>
                            </div>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}