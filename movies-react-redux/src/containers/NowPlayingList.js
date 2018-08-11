import React from 'react';
import {NowPlayingListItem} from "../components/NowPlayingListItem";

class NowPlayingList extends React.Component {

    constructor(){
        super();
        this.viewMovie = this.viewMovie.bind(this);
        this.addToWatchList = this.addToWatchList.bind(this);
    }

    renderNowPlayingMovies(movies) {
        let moviesToRender = null;

        if (movies.length !== 0) {

            moviesToRender = movies.map(
                function (movie, index) {
                    return <NowPlayingListItem key={index}
                                               movie={movie}
                                               viewMovie={this.viewMovie}
                                               addToWatchList={this.addToWatchList}/>
                }, this);
        }
        return (moviesToRender);
    }

    viewMovie(movie) {
        let url = "https://www.themoviedb.org/movie/" + movie.id;
        window.location.href = url;
    }

    addToWatchList(movie){
        console.log("Adding", movie.title, "to Watchlist!");
    }

    render() {
        let movies = this.props.nowPlayingMovies;
        return(
            <div className='list-group'>
                {this.renderNowPlayingMovies(movies)}
            </div>
        );
    }

}

export default NowPlayingList;