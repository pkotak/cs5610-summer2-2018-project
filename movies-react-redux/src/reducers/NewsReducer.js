import * as constants from '../constants';

let initialState = {
    news: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.FIND_TOP_NEWS:
            return {news: action.news.results}

        // case constants.SEARCH_MOVIES:
        //     return {movies: action.movies.results}

        default:
            return state;
    }
};

export default newsReducer;