import React, { Component } from 'react'
import NavBar from './components/NavBar'
import MovieList from "./containers/MovieList";
import {Provider} from 'react-redux';
import movieReducer from './reducers/MovieReducer';
import {createStore} from "redux";

const store = createStore(movieReducer);
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <MovieList/>
                </Provider>
            </div>
        )
    }
}