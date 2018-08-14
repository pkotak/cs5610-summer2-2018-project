import React from 'react';

export const NewsListItem = ({news}) => {
    let image = news.multimedia.filter(attr => attr.format === 'superJumbo');
    let imageSrc = '';
    if (image[0]) {
        imageSrc = image[0].url;
    } else {
        imageSrc = 'https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg';
    }
    console.log('image: ' + image[0]);
    let date = new Date(news.published_date).toLocaleDateString();
    return (
        <div className='list-group-item'>
            <div className="row">
                <div className="col-3">
                    <img className="img-responsive" src={imageSrc} width="300" height="200"/>
                </div>
                <div className="col-9">
                    <a href={news.url} target="_blank"><h3>{news.title}</h3></a>
                    <p>{news.abstract}</p>
                    <h6>{date}</h6>
                    <p>{news.byline}</p>
                </div>
            </div>
        </div>
    )
}