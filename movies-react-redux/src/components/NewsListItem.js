import React from 'react';

export const NewsListItem = ({news}) => {
    let image = news.multimedia.filter(attr => attr.format === 'superJumbo');
    let imageSrc = '';
    if (image[0]) {
        imageSrc = image[0].url;
    } else {
        imageSrc = 'https://picsum.photos/300/200';
    }
    console.log('image: ' + image[0]);
    return (
        <div className='col-3 mt-2'>
            <div className='card h-75'>
                <img className="card-img-top" src={imageSrc} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.abstract}</p>
                    <a href="#" className="btn btn-primary">View</a>
                </div>
            </div>
        </div>
    )
}