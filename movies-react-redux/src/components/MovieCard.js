import React from 'react';
import {Link} from 'react-router-dom';

export const MovieCard = ({movie, image}) => {
    return (
        <div className='col-3 mt-2'>
            <div className='card h-75'>
                <img className="card-img-top" src={image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <a className="btn btn-primary"><Link to={`/movie/detail`}>View</Link></a>
                </div>
            </div>
        </div>
    )
}