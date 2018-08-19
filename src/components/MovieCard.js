import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({movie, image, page, favouriteMovie, watchListMovie, watchlist, favorite, likeMovie}) => {
    if (page === 'discover') {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6 mt-2'>
                <div className='card h-100'>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <i className='fa fa-heart' onClick={() => {
                            favouriteMovie(movie, favorite);
                            console.log(favorite);
                            // if(favorite.favorite !== undefined)
                            //     alert(!favorite.favorite);
                        }}/>
                        <i className='fa fa-bookmark ml-2' onClick={() => {
                            console.log("MovieCard: Adding to watchlist", movie.id);
                            watchListMovie(movie, watchlist);
                            // if(watchlist.watchlist !== undefined)
                            //     alert(!watchlist.watchlist);
                            //alert(!watchlist.watchlist)
                        }}/>
                    </div>
                    <div className="card-footer text-muted">
                        Popularity: {movie.vote_average}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='col-lg-3 col-md-4 col-sm-6'>
                <div className='card h-100'>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                    </div>
                    <div className="card-footer text-muted">
                        <Link className='btn btn-outline-info' to={`/movie/${movie.id}`}>View</Link>
                    </div>
                </div>
            </div>
        )
    }
}