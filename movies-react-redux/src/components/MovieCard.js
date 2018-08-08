import React from 'react';
import NavBar from './NavBar'

export default class MovieCard extends React.Component {
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
                            <div key={index} className='col-3 mt-2'>
                                <div className='card h-75'>
                                    <img className="card-img-top" src={poster} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.overview}</p>
                                        <a href="#" className="btn btn-primary">View</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}