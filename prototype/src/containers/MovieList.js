import React from 'react'
import Search from '../components/Search'

class MovieList extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark justify-content-between">
                    <h1 className="text-white">The Movie Network</h1>
                </nav>
                <Search/>
            </div>
        )
    }
}

export default MovieList;