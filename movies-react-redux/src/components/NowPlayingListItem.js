import React from 'react';
import NowPlayingList from "../containers/NowPlayingList";

export const NowPlayingListItem = ({movie, viewMovie, addToWatchList}) =>
    <div href='#' className='list-group-item list-group-item-action row'>
        <button className='btn btn-outline-primary col-10'
                type="button"
                onClick={() => viewMovie(movie)}>
            {movie.title}
        </button>
        <div className='float-right col-2'>
            <i className='fa fa-video-camera'
               onClick={() => addToWatchList(movie)}/>
        </div>
    </div>