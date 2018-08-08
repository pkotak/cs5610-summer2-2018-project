import React, { Component } from 'react'
import HomePageContainer from './containers/HomePageContainer'
import MovieDetailContainer from './containers/MovieDetailContainer';
import {Provider} from 'react-redux';
import movieReducer from './reducers/MovieReducer';
import {createStore} from "redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const store = createStore(movieReducer);
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router>
                        <div>
                            <Route path='/home' component={HomePageContainer}/>
                            <Route path='/movie/detail' component={MovieDetailContainer}/>
                        </div>
                    </Router>
                </Provider>
            </div>
        )
    }
}