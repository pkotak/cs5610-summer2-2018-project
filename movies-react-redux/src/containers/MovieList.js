import React from 'react';
import * as constants from '../constants';
import NavBar from '../components/NavBar';
import {MovieCard} from '../components/MovieCard';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingList from "./NowPlayingList";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularMovies();
        this.props.findUpcomingMovies();
        this.props.findNowPlayingMovies();
    }

    render() {
        if (this.props.movies) {
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>

                    <UpcomingMovieCarousel upcomingMovies={this.props.upcomingMovies}/>

                    <div className='row mt-2'>
                        <div className='col-9 mt-2 ml-1'>
                            <h3>Popular Movies</h3>
                        </div>
                        <div className='card-deck col-9'>
                            {this.props.movies.map((movie, index) => {
                                let poster = constants.IMAGE_URL + movie.poster_path;
                                return (
                                    <MovieCard key={index} image={poster} movie={movie}/>
                                )
                            })}
                        </div>

                        <div className='col-3'>
                            <NowPlayingList nowPlayingMovies={this.props.nowPlayingMovies}/>
                        </div>
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