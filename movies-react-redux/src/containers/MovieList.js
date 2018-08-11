import React from 'react';
import NavBar from '../components/NavBar';
import * as constants from '../constants';
import {MovieCard} from '../components/MovieCard';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularMovies();
    }

    render() {
        if(this.props.movies){
            return (
                <div>
                    <NavBar searchMovie={this.props.searchMovie}/>
                    <div className='card-deck'>
                        {this.props.movies.map((movie, index) => {
                            let poster = constants.IMAGE_URL + movie.poster_path;
                            return (
                                <MovieCard key={index} image={poster} movie={movie} page='home'/>
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