import React from 'react';
import {Link} from 'react-router-dom';


export default class ExploreUser extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllFans();
    }

    renderLikedMovies() {
        return this.props.items.map(item => (
            <li className="list-group-item border-white bg-light">
                <Link className='btn btn-outline-info col-3'
                      to={`/movie/${item.Movie.id}`}>{item.Movie.title}
                </Link>
            </li>
        ))
    }

    showContent(id) {
        this.props.getFanContent(id);
    }

    followFan(id, username) {
        this.props.followFan(id, username);
    }

    renderfans() {
        if (this.props.fans) {
            return this.props.fans.map((fan, i) =>
                (
                    <div key={i}
                         className="row border shadow p-3 mb-3 border-primary">
                        <h5 className="col-3 mt-3 ">{fan.username}</h5>
                        <p className="col-4">{fan.description}</p>
                        <div className="col-5 btn-group p-2">
                            <button type='btn' className="btn btn-outline-dark m-1"
                                    onClick={() => this.showContent(fan._id)}>
                                Liked Movies
                            </button>
                            <button type='btn' className="btn btn-success m-1"
                                    onClick={() => this.followFan(fan._id, fan.username)}>
                                Follow
                            </button>
                        </div>
                        <div hidden={fan._id !== this.props.toShowId}
                             className="container-fluid border shadow-lg p-3 mb-3 border-secondary bg-light">
                            <h2 className="font-weight-normal">Movies liked by {fan.username}:</h2>
                            <ul className="list-group border-light">
                                {this.renderLikedMovies()}
                            </ul>
                            <button type='btn' className="btn btn-danger m-3 col-3"
                                    onClick={() => this.props.closeContentPane()}>
                                Close
                            </button>
                        </div>
                    </div>
                )
            )
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="border shadow p-3 mb-5 border-white">
                    <h1 className="display-4">All Fans In The Movie Network:</h1>
                    <div className="p-3">
                        {this.renderfans()}
                    </div>
                </div>
            </div>
        )
    }
};
