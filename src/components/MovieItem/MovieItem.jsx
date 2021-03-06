import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function MovieItem({ movieItem }) {
    //console.log('inside of MovieItem', movieItem);
    const dispatch = useDispatch();
    const history = useHistory();

    // const useStyles = makeStyles({
    //     root: {
    //         maxWidth: 400,
    //         padding: 40
    //     },
    //     media: {
    //         height: '100%',
    //         width: '100%'
    //     }
    // });

    // const classes = useStyles();

    // function that fetches clicked targeted details
    const handleDetails = () => {
        console.log('Clicked Details', movieItem.id);
        dispatch({ type: 'FETCH_GENRES', payload: movieItem.id })
        dispatch({ type: 'FETCH_SELECTED_MOVIE', payload: movieItem.id })
        history.push('/details')
    }

    return (
        <div key={movieItem.id} >
            <Card elevation={5}>
                <CardMedia
                    component="img"
                    image={movieItem.poster}
                    alt={movieItem.title}
                />
                <CardContent>
                    <Typography display="block" variant="h6" align="center" component="h2" gutterBottom>
                        {movieItem.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleDetails(movieItem.id)} size="small" >Details</Button>
                </CardActions>
            </Card>
        </div >
    )
}

export default MovieItem;

