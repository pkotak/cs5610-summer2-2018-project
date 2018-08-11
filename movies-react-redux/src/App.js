import React, { Component } from 'react'
import HomePageContainer from './containers/HomePageContainer'
import NewsPageContainer from './containers/NewsPageContainer'
import {Provider} from 'react-redux';
import movieReducer from './reducers/MovieReducer';
import newsReducer from './reducers/NewsReducer'
import {createStore} from "redux";

// const store = createStore(movieReducer);
const store = createStore(newsReducer);
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <NewsPageContainer/>
                    {/*<HomePageContainer/>*/}
                </Provider>
            </div>
        )
    }
}