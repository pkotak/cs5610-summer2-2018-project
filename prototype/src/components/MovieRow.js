import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
        // console.log("Trying to view movie")
        // console.log(this.props.movie.title)
        let url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() {
        return (
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img alt="poster"
                                 className="img-fluid"
                                 src={this.props.movie.poster_src}/>
                        </div>
                        <div className="col">
                            <div className="card-block px-2">
                                <h4 className="card-title">{this.props.movie.title}</h4>
                                <p className="card-text">{this.props.movie.overview}</p>
                                <input className="btn btn-lg btn-outline-primary"
                                       type="button"
                                       onClick={this.viewMovie.bind(this)}
                                       value="View"/>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MovieRow