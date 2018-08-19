import React from 'react';

class AllFavoriteMovies extends React.Component {

    constructor(props){
        super(props);
        this.props.findAllFavoriteMovies();
    }

    renderList(movies){
        return movies.map(movie =>
            <tr>
                <td>{movie.Movie.title}</td>
                <td>{movie.user.username}</td>
                <td><button type='btn'
                            className='btn btn-danger'
                            onClick={() => this.props.deleteFavoriteMovie(movie._id)}>
                    Delete
                </button>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <div className='container-fluid p-5'>
                <h3>All movies liked by all Fans:</h3>
                <table className='table table-hover'>
                    <thead>
                    <tr>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderList(this.props.allFavoriteMovies)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AllFavoriteMovies;