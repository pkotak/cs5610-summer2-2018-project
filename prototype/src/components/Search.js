import React from 'react'
import MovieRow from "./MovieRow";
import MovieService from "../services/MovieService";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.movieService = MovieService.instance;
        this.searchMovies = this.searchMovies.bind(this);
    }


    componentDidMount() {
        this.getMovieList("avengers");
    }

    getMovieList(searchTerm) {

        console.log("Perform search using moviedb");

        let urlString = "https://api.themoviedb.org/3/search/movie?api_key=ad9511753d7cfba06747668cadce5cfb&query=" + searchTerm;

        this.movieService
            .fetchMovies(urlString)
            .then((searchResults) => {
                console.log("Fetched data successfully");
                // console.log(searchResults)
                let results = searchResults.results;
                let movieRows = [];

                if (results) {
                    results.forEach((movie) => {
                        movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                        // console.log(movie.poster_path)
                        let movieRow = <MovieRow key={movie.id} movie={movie}/>;
                        movieRows.push(movieRow);
                    });
                    this.setState({rows: movieRows});
                }
            })
    }

    searchMovies(event) {
        console.log(event.target.value);
        let searchTerm = event.target.value;
        this.getMovieList(searchTerm);
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="input-group input-group-lg">
                        <input type="text"
                               onChange={this.searchMovies}
                               className="form-control input-lg"
                               id="search-movies"
                               placeholder="Movie Title"/>
                        <span className="input-group-btn">
                            <button className="btn btn-success btn-lg" type="submit">Search</button>
                        </span>
                    </div>

                    {this.state.rows}

                </div>
            </div>
        )
    }
}

export default Search;