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
            <div className="container-fluid">
                <h2>Now Trending</h2>
                <div className='list-group'>
                    {this.props.news.map((news, index) => {
                        return (
                            <NewsListItem key={index} news={news}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}