import React from 'react';
import NavBar from '../components/NavBar';
import {MovieCard} from '../components/MovieCard';
import UpcomingMovieCarousel from "./UpcomingMovieCarousel";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("MovieList", this.props)
        this.props.findPopularMovies();
        this.props.findUpcomingMovies();
    }

    render() {

        console.log("MovieListProps", this.props)
        return (
            <div>
                <NavBar searchMovie={this.props.searchMovie}/>

                <UpcomingMovieCarousel upcomingMovies={this.props.upcomingMovies}/>

                <div className='card-deck'>
                    {this.props.movies.map((movie, index) => {
                        let poster = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                        return (
                            <MovieCard key={index} image={poster} movie={movie}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}