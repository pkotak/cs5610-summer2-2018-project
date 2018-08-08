import React from 'react';
import NavBar from '../components/NavBar';
import {MovieCard} from '../components/MovieCard';
export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularMovies();
    }

    render() {
        return (
            <div>
                <NavBar searchMovie={this.props.searchMovie}/>
                <div className='card-deck'>
                    {this.props.movies.map((movie, index) => {
                        let poster = 'https://image.tmdb.org/t/p/w500'+ movie.poster_path;
                        return (
                            <MovieCard key={index} image={poster} movie={movie}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}