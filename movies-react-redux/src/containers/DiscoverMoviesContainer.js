import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import * as constants from '../constants';
import {MovieCard} from '../components/MovieCard';
import * as actions from "../actions/movie";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class DiscoverMovies extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.discoverMovies(this.props.sortValue, this.props.orderValue);
    }

    render() {
        if(this.props.movies){
            return (
                <div>
                    <NavBar/>
                    <div className='container-fluid'>
                        <div className='row mt-2'>
                            <div className='col-2'>
                                <h5>Sort By</h5>
                            </div>
                            <div className='col-2'>
                                <Select
                                    open={this.props.sortToggleOpen}
                                    onOpen={() => this.props.toggleSortDropdown()}
                                    onClose={() => this.props.toggleSortDropdown()}
                                    onChange={(event) => {this.props.setSortDropdownValue(event.target.value);}}
                                    value={this.props.sortValue}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='popularity'>Popularity</MenuItem>
                                    <MenuItem value='revenue'>Revenue</MenuItem>
                                </Select>
                            </div>
                            <div className='col-2'>
                                <h5>Order</h5>
                            </div>
                            <div className='col-2'>
                                <Select
                                    open={this.props.orderToggleOpen}
                                    onOpen={() => this.props.toggleOrderDropdown()}
                                    onClose={() => this.props.toggleOrderDropdown()}
                                    onChange={(event) => {this.props.setOrderDropdownValue(event.target.value);}}
                                    value={this.props.orderValue}>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='asc'>Ascending</MenuItem>
                                    <MenuItem value='desc'>Descending</MenuItem>
                                </Select>
                            </div>
                            <div className='col-2'>
                                <button className='btn btn-outline-success'
                                        onClick={() => this.props.discoverMovies(this.props.sortValue, this.props.orderValue)}>
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card-deck'>
                        {this.props.movies.map((movie, index) => {
                            let poster = constants.IMAGE_URL + movie.poster_path;
                            return (
                                <MovieCard key={index}
                                           image={poster}
                                           movie={movie}
                                           favorite={this.props.favorite}
                                           watchlist={this.props.watchlist}
                                           watchListMovie={this.props.watchListMovie}
                                           favouriteMovie={this.props.favoriteMovie}
                                           likeMovie={this.props.likeMovie}
                                           page='discover'/>
                            )
                        })}
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h3>Loading</h3>
            </div>
        );
    }
}

const dispatcherToPropsMapper = (dispatch) => ({
    discoverMovies: (sortBy, sortOrder) => actions.discoverMovies(dispatch, sortBy, sortOrder),
    searchMovie: (searchText) => actions.searchMovie(dispatch, searchText),
    favoriteMovie: (movieId, favorite) => actions.favoriteMovie(dispatch, movieId, favorite),
    watchListMovie: (movieId, watchlist) => actions.watchListMovie(dispatch, movieId, watchlist),
    toggleSortDropdown: () => actions.toggleSortDropdown(dispatch),
    toggleOrderDropdown: () => actions.toggleOrderDropdown(dispatch),
    setSortDropdownValue: (value) => actions.setSortDropdownValue(dispatch, value),
    setOrderDropdownValue: (value) => actions.setOrderDropdownValue(dispatch, value),
    likeMovie: (movie)  => actions.movieLiked(dispatch,movie)
})

const stateToPropsMapper = (state) => ({
    movies: state.movieReducer.movies,
    sortToggleOpen: state.movieReducer.sortToggleOpen,
    orderToggleOpen: state.movieReducer.orderToggleOpen,
    sortValue: state.movieReducer.sortValue,
    orderValue: state.movieReducer.orderValue,
    favorite: state.movieReducer.favorite,
    watchlist: state.movieReducer.watchlist,
})

const DiscoverMoviesContainer = connect(stateToPropsMapper, dispatcherToPropsMapper)(DiscoverMovies);

export default DiscoverMoviesContainer;