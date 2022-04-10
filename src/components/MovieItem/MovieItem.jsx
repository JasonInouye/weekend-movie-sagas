import React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MovieDetails from '../MovieDetails/MovieDetails';

function MovieItem({ movieItem }) {
    //console.log('inside of MovieItem', movieItem);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetails = () => {
        console.log( 'Clicked Details', movieItem.id );
        dispatch({ type: 'FETCH_GENRES', payload: movieItem.id })
        history.push('/details')
    }

    return (
        <div key={movieItem.id} >
            <h3>{movieItem.title}</h3>
            <img src={movieItem.poster} alt={movieItem.title} onClick={() => handleDetails(movieItem.id)}/>
        </div>
    )
}

export default MovieItem;

