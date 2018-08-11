import * as constants from '../constants/index';

export const findTopNews = dispatch => {
    fetch(constants.TOP_NEWS_URL)
        .then(response => response.json())
        .then(news => dispatch({
            type: constants.FIND_TOP_NEWS,
            news: news
        }))
}

// export const searchMovie = (dispatch, searchText) => {
//     fetch(constants.MOVIE_SEARCH_URL + '/' + searchText)
//         .then(response => response.json())
//         .then(movies => dispatch({
//             type: constants.SEARCH_MOVIES,
//             movies: movies
//         }))
// }