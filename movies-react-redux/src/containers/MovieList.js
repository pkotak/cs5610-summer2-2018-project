import React from 'react';
import NavBar from '../components/NavBar';
import blue from '@material-ui/core/colors/blue';
import {MovieCard} from '../components/MovieCard';
import UpcomingMovieCarousel from './UpcomingMovieCarousel';
import NowPlayingList from "./NowPlayingList";
import * as constants from '../constants';
import {MovieCard} from '../components/MovieCard';

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
      if(this.props.movies){
        return (
            <div>
                <NavBar searchMovie={this.props.searchMovie}/>

                <UpcomingMovieCarousel upcomingMovies={this.props.upcomingMovies}/>


                <div className='container-fluid row'>
                    <div className='col-9'>
                        <h4 className='m-2 p-2 float-left text-white '
                            style={{background: blue[800]}}>Popular:</h4>
                    </div>
                    <div className='col-3'>
                        <h4 className='m-2 p-2 float-left text-white '
                            style={{background: blue[800]}}>In Theaters:</h4>
                    </div>
                </div>

                <div className='container-fluid row'>
                    <div className='card-deck col-9'>
                        {this.props.movies.map((movie, index) => {
                            let poster = constants.IMAGE_URL + movie.poster_path;
                            return (
                                <MovieCard key={index} image={poster} movie={movie}/>
                            )
                        })}
                    </div>

                    <div className='col-3'>
                        <NowPlayingList nowPlayingMovies={this.props.nowPlayingMovies} />
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