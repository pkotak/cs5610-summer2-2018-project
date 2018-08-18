import React from 'react'
import {Link} from 'react-router-dom';

const FanPage = ({username, description}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Profile of {username}: </h1>
            {description !== undefined
                ? <p className="lead">{description}</p>
                : <p className="lead">All the good stuff you've been upto on The Movie Network.</p>}
            <hr className="my-2"/>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Favorite Movies</h5>
                            <p className="card-text">View all your favorite movies:</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/favorite-movies">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Watchlist</h5>
                            <p className="card-text">Here are all the movies you've added to your watchlist!.</p>
                            <Link className="btn btn-outline-primary"
                                  to="/watchlist">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Fans Followed</h5>
                            <p className="card-text">View all other fans you've followed!</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/fans-followed">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Followers</h5>
                            <p className="card-text">View all fans who have followed you!</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/followers">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Actors Following</h5>
                            <p className="card-text">View all actors you've followed!</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/actors-followed">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title">Critics Following</h5>
                            <p className="card-text">View all critics you've followed!</p>
                            <Link className="btn btn-outline-primary"
                                  to="/my-page/critics-followed">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default FanPage;