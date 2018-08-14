import * as constants from '../constants';

let newsInitialState = {
    news: []
};

const newsReducer = (state = newsInitialState, action) => {
    switch (action.type) {
        case constants.FIND_TOP_NEWS:
            return {news: action.news.results}

        default:
            return state;
    }
};

export default newsReducer;