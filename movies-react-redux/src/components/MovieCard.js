import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findPopularMovies();
    }

    render() {
        return (
            <div className='card-deck'>
                {this.props.movies.map((movie, index) => {
                    return (
                        <div className='col-3 mt-2'>
                        <div key={index} className='card'>
                            <Card >
                                <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                           image={'https://image.tmdb.org/t/p/w500'+movie.poster_path}
                                           title={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        {movie.title}
                                    </Typography>
                                    <Typography component="p">
                                        {movie.overview}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" target="_blank">
                                        Go To Movie
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                        </div>
                    )
                })}

            </div>
        );
    }
}