import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({movie, image, page}) => {
    if(page === 'discover'){
        return (
            <div className='col-3 mt-2'>
                <div className='card h-100'>
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <i className='fa fa-heart'/>
                        <i className='fa fa-bookmark ml-2'/>
                    </div>
                    <div className="card-footer text-muted">
                        Popularity: {movie.vote_average}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='col-3 mt-2'>
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