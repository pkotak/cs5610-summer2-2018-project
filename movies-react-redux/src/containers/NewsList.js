import React from 'react';
import NavBar from '../components/NavBar';
import {NewsListItem} from '../components/NewsListItem';
export default class NewsList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findTopNews();
    }

    render() {
        return (
            <div>
                {/*<NavBar searchMovie={this.props.searchMovie}/>*/}
                <div className='card-deck'>
                    {this.props.news.map((news, index) => {
                        // let poster = 'https://image.tmdb.org/t/p/w500'+ news.poster_path;
                        return (
                            <NewsListItem key={index} news={news}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}