import React from 'react';
import blue from '@material-ui/core/colors/blue';

export const MovieCarouselItem = ({movies, images}) => {
    return (
        <div className="bg-white">
            <div className="img-rounded"><h4 className="m-2 p-2 float-left text-white "
                                             style={{background: blue[800]}}>Upcoming:</h4></div>
            <div className="row">
                <div className="col-4">
                    <img style={{maxWidth: "400px"}} src={images[0]}/>
                    <h1 className="legend bg-transparent text-secondary">{movies[0].title}</h1>
                </div>
                <div className="col-4">
                    <img style={{maxWidth: "400px"}} src={images[1]}/>
                    <h1 className="legend bg-transparent text-secondary">{movies[1].title}</h1>
                </div>
                <div className="col-4">
                    <img style={{maxWidth: "400px"}} src={images[2]}/>
                    <h1 className="legend bg-transparent text-secondary">{movies[2].title}</h1>
                </div>
            </div>
        </div>
    )
}